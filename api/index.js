'use strict';
const Redis = require('ioredis');
const Session = require("./session");
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const { getTypes, getUsers, getTasks, checkDatabase, createUser } = require('./db');
const bodyParser = require('body-parser');
const session = require('express-session');
const jwt = require('jsonwebtoken');
// We need 2 instances, bc redis in subscription mode cannot set/get values
const redis = new Redis();
const rSubscriptions = new Redis();
const adminCredentials = {
  username: 'admin',
  password: 'admin'
};
const jwtPassword = 'EepugahCh9CheeCheiyu';

// Configure express
app.set('trust proxy', 1);

app.use(express.static(__dirname + '/admin/build'))
app.use(cors());
app.use(session({
  secret: 'UC8phae5einieWa2Autoh4ei',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(bodyParser.text());

const sessions = {};

const tasks = {};

const getEvents = (type) => ({
  start (task) {
    redis.set(`status:${type}:${task}`, 'start');
    io.emit(`status:${type}:${task}`, 'start');
  },
  end (task) {
    redis.set(`status:${type}:${task}`, 'end');
    io.emit(`status:${type}:${task}`, 'end');
  },
  clear (task) {
    redis.set(`status:${type}:${task}`, null);
    io.emit(`status:${type}:${task}`, 'clear');
  },
  progress (task, p) {
    redis.set(`status:${type}:${task}`, p);
  }
});

io.on('connection', (socket) => {
  socket.emit('greetings')
})

const isLogged = ({ headers: { token }}) => {
  return jwt.decode(token, jwtPassword) === adminCredentials.password
};

const options = {
  maxTime: 60
};

async function bootstrap () {
  await checkDatabase();
  const types = await getTypes();
  const tasks = await getTasks();
  console.log(`Types are `, types);
  console.log(`Tasks are `, tasks);

  for (const type of types) {
    Promise.all(tasks.map(task => redis.get(`status:${type.id}:${task.id}`)))
      .then(results => {
        if (!results.some(result => result)) {
          return;
        }
        const result = results.reduce((acc, res, i) => Object.assign(acc, { [tasks[i].id]: res }), {});
        console.log('Results are ', result);
        sessions[type.id] = new Session(tasks, options, getEvents(type.id));
        sessions[type.id].state = result;
      });
  }

  app.get('/status/:type', async function (req, res, next) {
    const { type: typeName } = req.params;
    const type = types.find(type => type.name === typeName);
    if (!type) {
      res.send({
        'status': 'error'
      });
      return;
    }
    const status = await redis.get(`status:${typeName}`);
    res.send({
      status,
      type
    });
  });

  const getTypeInfo = (type) => {
    type = typeof type === 'object' ? type : types[type];
    const session = sessions[type.id];
    const state = session ? session.state : {};
    return {
      ...type,
      tasks: tasks.map((task) => ({ ...task, status: state[task.id] || null }))
    }
  };

  app.get('/states', async function (req, res) {
    const data = types.map(getTypeInfo);
    res.send(data);
  });

  app.get('/states/:type', async function (req, res) {
    res.send(getTypeInfo(req.params.type));
  });

  app.post('/states/:type/:task/start', async function (req, res) {
    if (!isLogged(req)) {
      res.send({
        status: 'error',
        error: 'User is not logged'
      });
      return;
    }
    const { type, task} = req.params;
    try {
      sessions[type] = sessions[type] || new Session(tasks, options, getEvents(type));
      const session = sessions[type];
      session.start(task);
      res.send({
        status: 'success'
      })
    } catch (e) {
      res.send({
        status: 'error',
        error: e.message
      });
    }
  });
  app.post('/states/:type/:task/clear', async function (req, res) {
    if (!isLogged(req)) {
      res.send({
        status: 'error',
        error: 'User is not logged'
      });
      return;
    }
    const { type, task} = req.params;
    try {
      const session = sessions[type];
      if (session) {
        session.clear(task);
      }
      res.send({
        status: 'success'
      })
    } catch (e) {
      res.send({
        status: 'error',
        error: e.message
      });
    }
  });
  app.post('/states/:type/:task/end', async function (req, res) {
    if (!isLogged(req)) {
      res.send({
        status: 'error',
        error: 'Not logged'
      });
      return;
    }
    const { type, task} = req.params;
    if (!sessions[type]) {
      res.send({
        status: 'error',
        error: 'Session doesn\'t exist'
      });
    }
    try {
      const session = sessions[type];
      session.end(task);
      res.send({
        status: 'success'
      })
    } catch (e) {
      res.send({
        status: 'error',
        error: e.message
      });
    }
  });


  app.post('/users', async function (req, res) {
    const { name, phone, last_name, code } = req.body;
    const type = types.find(t => t.code === code);
    if (!type) {
      res.send({
        status: 'error',
        message: 'Code is not valid'
      });
      return;
    }

    if (!(name && phone && last_name)) {
      res.send({
        status: 'error',
        message: 'Not enough params'
      });
      return;
    }

    const user = { name, last_name: last_name, type_id: type.id, phone };
    const result = await createUser(user);
    if (result) {
      res.send({
        status: 'success',
        message: 'User is successfully created'
      });
      io.emit('newUser', user);
    } else {
      res.send({
        status: 'error',
        message: 'Error on creating user'
      });
    }
  });
  app.get('/users', async function (req, res) {
    const users = await getUsers();
    res.send(users);
  });

  app.get('/login', (request, response) => {
    if (isLogged(request)) {
      response.send({
        status: 'success'
      })
    } else {
      response.send({
        status: 'error'
      })
    }
  });

  app.post('/login', (request, response) => {
    const { username, password } = request.body;
    if (username === adminCredentials.username && password === adminCredentials.password) {
      request.session.isLogged = true;
      response.send({
        status: 'success',
        token: jwt.sign(adminCredentials.password, jwtPassword)
      });
    } else {
      response.send({
        status: 'error',
        message: 'Invalid password or username'
      });
    }

  });

  types.forEach(type => rSubscriptions.subscribe(`start_${type}`));

  rSubscriptions.on(`message`, function (channel, data) {
    const matches = channel.match(/^(.+?)_(.+?)$/) || [];
    const action = matches[1], type = matches[2];
    if (!sessions[type]) {
      sessions[type] = new Session(tasks, options, getEvents(type));
    }
    const session = sessions[type];

    if (action === 'start') {
      session.start();
    } else {
      console.log('Action not found!');
    }

    console.log(`Starting ${channel}, ${data} (${action}, ${type})!`)
  });
}

bootstrap().then(() => {
  console.log('Bootstrapped!')
});

http.listen(3333, function () {
  console.log('Listening on :3000');
});
