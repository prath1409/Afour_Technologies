
import {v4 as uuidv4} from 'uuid';
import bcryptjs from 'bcryptjs';
import { JsonWebTokenError } from 'jsonwebtoken';
import {pool} from '../Database/db'
import { IGetUserAuthInfoRequest, Books} from "./serviceTypes"
import { RES_STATUS } from '../constants';
//  It is an helper function for validation of of request body parameters for addBooks route
//  of @type Books | null and takes @param req of @type IGetUserAuthInfoRequest.
function Bookvalidator(req: IGetUserAuthInfoRequest): Books | null{
    if(req.user.role != 'admin')
        return {status : RES_STATUS.NOTATHURIZED, message: "Invalid athuriazation"};
    else if(!req.body.name)
        return {status : RES_STATUS.BAD_REQUEST, message: "Name required"};
    else if(!req.body.available_count)
        return {status : RES_STATUS.BAD_REQUEST, message: "Available_count required"};
    else if(Object.values(req.body).length != 2)
        return {status : RES_STATUS.BAD_REQUEST, message: "Two parameters required"};
    else 
        return null;
}


//  It is a function to add books in db by librarian i.e admin 
//  of @type Books takes @params req and res of @types IGetUserAuthInfoRequest,Response respectively.
export const addBooks = async (req: IGetUserAuthInfoRequest): Promise<Books>=>{
    return new Promise(async (resolve, reject) => {
        try {
            const validate: Books | null = Bookvalidator(req);
            if(validate)
                return resolve(validate);
            const Id: string = uuidv4();
            const date: Date = new Date();
            const librarian = await pool.query(`SELECT id FROM users WHERE email = $1`, [req.user.email]);
            const librarian_id: string = librarian.rows[0].id
            await pool.query(`INSERT INTO books (id, name, available_count, created_by, updated_at, updated_by) VALUES ($1, $2, $3, $4, $5, $6)`,[Id, req.body.name, req.body.available_count, librarian_id, date.toUTCString(), librarian_id]);
            const ans = await pool.query(`SELECT id, name, available_count, issued_count FROM books WHERE id = $1`, [Id]);
            return resolve({status: RES_STATUS.SUCCESS, book: ans.rows[0]});
        }
        catch (err) {
            return reject(err);
        }
    });
}


/**
 * description
 *
 * @param {User} description
 * @returns {Promis<void>} description
 */



/**
 * This functions returns all the Shipments/Loads for
 * BluJay client for given offset Value.
 * @param {Logger} log
 * @param {AxiosRequestHeaders} headers
 * @param {ClientConfig} clientConfig
 * @param {number} offsetValue - offset for pagination
 * @returns {Promise<Loads[]>}
 */

/**
 * description
 *
 * @param {IGetUserAuthInfoRequest} req description
 * @returns {Promis<Books>}  description
 */


//  It is a function to get available books in db by any user i.e User or admin 
//  of @type Books and takes @params req and res of @types IGetUserAuthInfoRequest,Response respectively.
export const availableBooks = async (req: IGetUserAuthInfoRequest): Promise<Books> => {
    return new Promise(async (resolve, reject) => {
        try {
            const ans = await pool.query('SELECT id, name, available_count FROM books WHERE available_count > 0');
            if(!ans.rowCount)
                return resolve({status: RES_STATUS.NOTFOUND, message: 'No available books'});
            return resolve({status: RES_STATUS.SUCCESS,  books: ans.rows});
        }
        catch (err) {
            return reject(err);
        }
    });
}































// It is a function to raise book request by student i.e User 
// of @type Book or string and  takes @params req and user of @types IGetUserAuthInfoRequest, User respectively.
export const raiseBook = async (req: IGetUserAuthInfoRequest): Promise<Books> => {
    return new Promise(async (resolve, reject) => {
        try {
            if(!req.body.id)
                return resolve({status: RES_STATUS.BAD_REQUEST, message: 'Book Id required'});
            const book_id: string = req.body.id;
            const user = await pool.query(`SELECT id FROM users WHERE email = $1`, [req.user.email]);
            const user_Id = user.rows[0].id;
            const user_book_maped = await pool.query(`SELECT user_id FROM user_book_maping WHERE book_id = $1 AND user_id = $2`,[book_id, user_Id]);
            if(user_book_maped.rowCount)
                return resolve({status: RES_STATUS.BAD_REQUEST, message: 'Book already issued'});
            const avail = await pool.query(`SELECT available_count FROM books WHERE id = $1 AND available_count > 0`, [book_id]);
            if(!avail.rowCount)
                return resolve({status: RES_STATUS.NOTFOUND, message: 'No available books'});
            const date: Date = new Date();
            await pool.query(`INSERT INTO user_book_maping (book_id, user_id, created_by, updated_at, updated_by) VALUES ($1, $2, $3, $4, $5)`,[book_id, user_Id, user_Id, date.toUTCString(), user_Id]);
            await pool.query(`UPDATE books SET available_count = available_count - 1, issued_count = issued_count + 1,  updated_at = $1, updated_by = $2 WHERE id = $3`, [date.toUTCString(), user_Id, book_id]);
            const ans = await pool.query(`SELECT id, name FROM books WHERE id in (SELECT book_id FROM user_book_maping WHERE user_id = $1)`, [user_Id]);
            return resolve({status: RES_STATUS.SUCCESS, book: ans.rows[0]});
        }
        catch(err) {
            return reject(err);
        }
    });
}




















































/*
// It is a function to get issued books by student i.e User of @type Book or string and takes @params user of @types User.
export const issuedBooks = async (user: any): Promise<Book | string> =>{
    return new Promise(async (resolve, reject) => {
        try {
            const username: string = user.id;
            const ans = await pool.query(`SELECT book_id, book_name FROM book WHERE book_id in (SELECT book_id FROM shared WHERE username = $1)`, [username]);
            if(!ans.rowCount)
                return resolve('noissued');
            return resolve(ans.rows);
        }
        catch(err) {
            return reject(err);
        }
    });
}

// It is a function to return books by student i.e 
// of @type Book or string and  takes @params req and res of @types IGetUserAuthInfoRequest,Response respectively.
export const returnBooks =async (req: IGetUserAuthInfoRequest, user: any): Promise<Book | string> => {
    return new Promise(async (resolve, reject) => {
        try {
            //const username = 'b0d4a6f7-390d-4ea1-a9cf-762b89ac2fe7';
            if(!req.body.id)
                return resolve('nobookid');
            const username: string = user.id;
            const book_id: string = req.body.id;
            const avail = await pool.query(`SELECT issued_count FROM book WHERE book_id = $1 AND issued_count > 0`, [book_id]);
            //console.log(avail.rows);
            if(!avail.rowCount)
                return resolve('noissued');
            await pool.query(`DELETE FROM shared WHERE book_id = $1 AND username = $2`,[book_id, username]);
            await pool.query(`UPDATE book SET available_count = available_count + 1, issued_count = issued_count - 1 WHERE book_id = $1`, [book_id]);
            const ans = await pool.query(`SELECT book_id, book_name FROM book WHERE book_id in (SELECT book_id FROM shared WHERE username = $1)`, [username]);
            if(!ans.rowCount)
                return resolve('noissued');
            return resolve(ans.rows);
        }
        catch(err) {
            return reject(err);
        }
    });
}
*/