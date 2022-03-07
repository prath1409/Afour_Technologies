//const { host } = require('pg/lib/defaults');

const Pool = require('pg').Pool;
//import {Pool} from 'pg'

export const pool = new Pool({
    user: 'postgres',
    password: '1SUL5T4G',
    database: 'postgres',
    host: 'localhost',
    port: 5432
});
