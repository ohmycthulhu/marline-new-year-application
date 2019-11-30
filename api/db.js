const mysql = require('mysql')

const connection = mysql.createConnection({
  user: 'user',
  schema: 'nya',
  database: 'nya'
});

const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
     id INT AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     last_name VARCHAR(100) NOT NULL,
     phone VARCHAR(100) NOT NULL,
     type_id INTEGER,
     PRIMARY KEY(id),
     FOREIGN KEY (type_id) REFERENCES types(id)
  )

`;

const createTypesTable = `
  CREATE TABLE
      IF NOT EXISTS
      types (
          id INTEGER AUTO_INCREMENT,
          name VARCHAR(100),
          code VARCHAR(10) UNIQUE,
          PRIMARY KEY (id)
  );
`;

const createTasksTable = `
  CREATE  TABLE
        IF NOT EXISTS
        tasks (
            id INTEGER AUTO_INCREMENT,
            duration FLOAT NOT NULL,
            name VARCHAR (100) NOT NULL,
            PRIMARY KEY (id)
        );
`;

const getTypesQuery = `
  SELECT * FROM types;
`;

const getTasksQuery = `
  SELECT * FROM tasks
`;

const getTypeByCodeQuery = "SELECT * FROM types t WHERE t.code LIKE ?;";

const types = [
  { name: 'azercell', code: '1123' },
  { name: 'bakcell', code: '5813' },
  { name: 'nar', code: '2134' }
];

const tasks = [
  { name: 'first', duration: 30 },
  { name: 'second', duration: 50 }
];

const fillTypesTable = `
  INSERT INTO 
    types (name, code)
   VALUES
    ${types.map(t => `( "${t.name}", "${t.code}" ) `)}
`;

const fillTasksTable = `
  INSERT INTO
    tasks (name, duration)
  VALUES
    ${tasks.map(t => `( "${t.name}", ${t.duration} )`)}
`;

const createUserQuery = `
  INSERT INTO users (name, last_name, phone, type_id) 
  VALUES (?, ?, ?, ?)
`;

const getUsersQuery = `
  SELECT * FROM users
  ORDER BY id DESC;
`;

async function checkDatabase () {
  return new Promise((resolve, reject) => {
    // Start transaction
    connection.beginTransaction((beginTransactionError) => {
      if (beginTransactionError !== null) {
        console.log('Transaction error - ', beginTransactionError.message);
        reject(beginTransactionError.message);
      }
      // Types table
      connection.query(`CHECK TABLE types`, async function (_, results) {
        const {Msg_type: state} = results[0];
        if (state === 'Error') {
          console.log('Creating and filling table types: ');
          await connection.query(createTypesTable);
          await connection.query(fillTypesTable);
        }
        console.log('Results - ', state);
        // Users table
        connection.query(createUsersTable, function () {
          // Tasks table
          connection.query('CHECK TABLE tasks', async function (_, results) {
            const {Msg_type: state} = results[0];
            if (state === 'Error') {
              console.log('Creating and filling table tasks: ');
              await connection.query(createTasksTable);
              await connection.query(fillTasksTable);
            }
            connection.commit(commitError => {
              if (commitError !== null) {
                reject(commitError.message);
              } else {
                resolve();
              }
            })
          });
        });
      });
    });
  });
}

function _fetchRequest (query) {
  return function () {
    return new Promise(((resolve, reject) => {
      connection.query(query, function (_, results, fields) {
        fields = fields.map(f => f.name);
        resolve(Object.values(results).map(row => fields.reduce((acc, name) =>
          Object.assign(acc, {[name]: row[name]}), {})));
      });
    }));
  }
}

const getTypes = _fetchRequest(getTypesQuery);
const getTasks = _fetchRequest(getTasksQuery);
const getUsers = _fetchRequest(getUsersQuery);

function createUser({ name, last_name, phone, type_id }) {
  return new Promise(((resolve) => {
    connection.query(createUserQuery, [name, last_name, phone, type_id],
      function (_, results) {
      resolve(!!results)
    });
  }));
}

module.exports = {
  checkDatabase,
  createUser,
  getTypes,
  getTasks,
  getUsers
};
