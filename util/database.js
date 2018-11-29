/* 
    # mysql2 is dependency for sequelize
    # When using mysql2 to work with database
    # Database has to be created manually
    # Tables and relations also
    # Pool is created so that multiple queries could be executed at once
    # Pool is exported as promise so queries could be called in async way with .then() or await
    # E.g.
    # db.execute('SELECT * FROM users').then(i() => {}).catch(() => {});

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_complete',
    password: ''
});

module.exports = pool.promise();
*/

const Sequelize = require('sequelize');
const sequelize = new Sequelize('node_complete', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
