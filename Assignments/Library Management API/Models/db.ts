const { host } = require('pg/lib/defaults');

const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: '1SUL5T4G',
    database: 'postgres',
    host: 'localhost',
    port: 5432
});

module.exports = pool;