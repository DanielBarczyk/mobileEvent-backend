import mysql2 from 'mysql2';

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'dbarczyk',
    database: 'mobile_eventV1',
    password: 'x8vemkgg'
  });
connection.connect();

export default connection;