// const { json } = require('express/lib/response');
// const pooll = require('../Models/db');

// const availableBooks = async () => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const ans = await pooll.query('SELECT * FROM book where available>0');
//             return resolve(ans);
//         }
//         catch (err) {
//             return reject(err);
//         }
//     });
// }

// const issuedBooks = async () =>{
//     return new Promise(async (resolve, reject) => {
//         try {
//             const ans = await pooll.query('SELECT * FROM book WHERE bok_id FROM shared == book_id FROM book');
//             return resolve(ans);
//         }
//         catch (err) {
//             return reject(err);
//         }
//     });
// }

// module.exports = {
//     availableBooks: availableBooks,
//     issuedBooks: issuedBooks
// }


import { Request, Response, NextFunction, json } from 'express';
import bcryptjs from 'bcryptjs';
import { JsonWebTokenError } from 'jsonwebtoken';
require('dotenv').config();
const jwt = require('jsonwebtoken');
const pooll = require('../Models/db');
//import { user } from 'pg/lib/defaults';

// const users = [{
//     name: 'Prathmesh',
//     password: 'pass'
// }];
interface userss {
    name: string,
    password: string
}
const users: userss[] = [
    {
        "name": "Prathmesh",
        "password": "12425"
    }
];
const CreateStudent = async (req: Request) => {
    //const hashedPassword = await bcryptjs.hash(req.body.password, 10);
    //const user = { name: req.body.name, password: hashedPassword };
    //users.push(user);
    //console.log(hashedPassword);
    //return 'logged';
    return new Promise(async (resolve, reject) => {
        try {
            const hashedPassword = await bcryptjs.hash(req.body.password, 10);
            console.log(hashedPassword);
            const ans = await pooll.query(`INSERT INTO student (student_id, student_name, passcode) VALUES ($1, $2, $3)`,[req.body.id, req.body.name, hashedPassword]);
            return resolve('sucessful');
        }
        catch (err) {
            return reject(err);
        }
    });
}
const login = async (req: Request) => {
    return new Promise(async (resolve, reject) => {
        try {
            // const hashedPassword = await bcryptjs.hash(req.body.password, 10);
            // console.log(hashedPassword);
            // const index = await pooll.query(`SELECT student_id, student_name FROM student WHERE student_id = $1 AND passcode = $2`, [req.body.id, hashedPassword]);
            let passcode= await pooll.query(`SELECT passcode FROM student WHERE student_id = $1`, [req.body.id]);
            //passcode.toString(passcode);
            const passkey = passcode.rows;
            console.log(passkey);
            //return resolve('Empty');
            passkey.toString(passkey);
            if(await bcryptjs.compare(req.body.password, passkey[0].passcode)){
                // const student_id = req.body.id;
                // const user = { id: student_id};
                // const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
                return resolve('logged');
                //console.log(accessToken);
                //return resolve(accessToken);
            }
            else{
                return resolve('invalid password');
            }
            
        }
        catch (err) {
            return reject(err);
        }
    });
}

// function authenticate(req: Request, res:Response){
//     const authHeader = req.headers['authorization'];
//     const token = authHeader.split(' ')[1];
//     if(token == null)
//         return 'notvalidtoken';
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {

//     })
// }
module.exports = {
    CreateStudent: CreateStudent,
    login: login
}