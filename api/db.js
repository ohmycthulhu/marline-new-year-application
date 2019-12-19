const mysql = require('mysql')
const { database: dbConfig } = require('./config.json');
const connection = mysql.createConnection({
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  host: dbConfig.host
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
  CHARACTER SET utf8

`;

const createTypesTable = `
  CREATE TABLE
      IF NOT EXISTS
      types (
          id INTEGER AUTO_INCREMENT,
          name VARCHAR(100),
          code VARCHAR(100) UNIQUE,
          PRIMARY KEY (id)
  )
  CHARACTER SET utf8
`;

const createTasksTable = `
  CREATE TABLE
        IF NOT EXISTS
        tasks (
            id INTEGER AUTO_INCREMENT,
            duration FLOAT NOT NULL,
            name VARCHAR (100) NOT NULL,
            image_path VARCHAR(100) NOT NULL,
            bg_path VARCHAR(100),
            text TINYTEXT NOT NULL,
            PRIMARY KEY (id)
        )
  CHARACTER SET utf8
`;

const getTypesQuery = `
  SELECT * FROM types;
`;

const getTasksQuery = `
  SELECT * FROM tasks
`;

const getTypeByCodeQuery = "SELECT * FROM types t WHERE t.code LIKE ?;";

const types = [
  { name: 'Bakcell', code: 'bakcell' },
  { name: 'Nar', code: 'nar' },
  { name: 'Aztelecom/1', code: 'azerconnect-port' },
  { name: 'Aztelecom/2', code: 'azerconnect' }
];

const tasks = [
  {
    name: 'Yenİ İl ağacını bəzəyİn',
    duration: 900,
    image_path: 'assets/images/tree.png',
    bg_path: 'assets/images/tree_bg.png',
    text: 'Bəzəkləri parıltılı bağlamada axtar!\nMasanın və oturacaqların altına diqqət yetir - dolab (şkafları) buraxma - mətbəxə bax - bəlkə resepşn və ya pəncərə tərəfdə?'
  },
  {
    name: 'Pazl',
    duration: 900,
    image_path: 'assets/images/puzzle.png',
    bg_path: 'assets/images/puzzle_bg.png',
    text: 'Magnitin dəvətnamədə olduğunu xatırlayırsan?\nMagniti Yeni il pazlına yerləşdir. Şəkildə onun üçün yer tapmağa çalış!'
  },
  {
    name: 'Lotoreya',
    duration: 9999,
    image_path: 'assets/images/lottery.png',
    bg_path: 'assets/images/lottery_bg.png',
    text: 'Lotoreyada iştirak et!\nŞanslı biletini lotereya barabanına qoymağı və hədiyyəni götürməyi unutma!'
  },
];

const fillTypesTable = `
  INSERT INTO 
    types (name, code)
   VALUES
    ${types.map(t => `( "${t.name}", "${t.code}" ) `)}
`;

const fillTasksTable = `
  INSERT INTO
    tasks (name, duration, image_path, bg_path, text)
  VALUES
    ${tasks.map(t => `( "${t.name}", ${t.duration}, "${t.image_path}", ${t.bg_path ? `"${t.bg_path}"` : 'NULL'}, "${t.text}" )`)}
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
