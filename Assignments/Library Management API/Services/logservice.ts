//require('dotenv').config();
import {v4 as uuidv4} from 'uuid';
import {Response, NextFunction} from 'express';
import bcryptjs from 'bcryptjs';
import { JsonWebTokenError } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import {pool} from '../Database/db';
import { IGetUserAuthInfoRequest, User, Users} from "./serviceTypes";
import { RES_STATUS } from '../constants';



//  It is an helper function for validation of of request body parameters for register route
//  of @type Users | null and takes @param req of @type IGetUserAuthInfoRequest. 
function Regvalidator(req: IGetUserAuthInfoRequest): Users | null{
    if(!req.body.role)
        return {status : RES_STATUS.BAD_REQUEST, message: "Role required"};
    else if(!req.body.name)
        return {status : RES_STATUS.BAD_REQUEST, message: "Name required"};
    else if(!req.body.email)
        return {status : RES_STATUS.BAD_REQUEST, message: "Email required"};
    else if(!req.body.password)
        return {status : RES_STATUS.BAD_REQUEST, message: "Password required"};
    else if(Object.values(req.body).length != 4)
        return {status : RES_STATUS.BAD_REQUEST, message: "Four parameters required"};
    else if(req.body.role != 'user' && req.body.role != 'admin')
        return {status : RES_STATUS.BAD_REQUEST, message: "Roles are only admin and user"};
    else 
        return null
}


//  It is an helper function for validation of of request body parameters for login route
//  of @type Users | null and takes @param req of @type IGetUserAuthInfoRequest. 
function Loginvalidator(req: IGetUserAuthInfoRequest): Users | null{
    if(!req.body.username)
        return {status : RES_STATUS.BAD_REQUEST, message: "Username required"};
    else if(!req.body.password)
        return {status : RES_STATUS.BAD_REQUEST, message: "Password required"};
    else if(Object.values(req.body).length != 2)
        return {status : RES_STATUS.BAD_REQUEST, message: "Two parameters required"};
    else
        return null;
}


// It is a function to registeration of @type User or string and  takes @params as req of type IGetUserAuthInfoRequest
export const Registration  = async (req: IGetUserAuthInfoRequest): Promise<Users> => {
    return new Promise(async (resolve, reject) => {
        try {
            const validate: Users | null = Regvalidator(req);
            if(validate)
                return resolve(validate);
            const user = await pool.query(`SELECT email FROM users WHERE Email = $1`, [req.body.email]);
            if(user.rowCount)
                 return resolve({status: RES_STATUS.BAD_REQUEST, message: 'User already exits'});//resolve("userexsit");
            const hashedPassword: string = await bcryptjs.hash(req.body.password, 10);
            const Id: string = uuidv4();
            const date: Date = new Date();
            await pool.query(`INSERT INTO users (id, role, name, email, passcode, created_by, updated_at, updated_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, [Id, req.body.role, req.body.name, req.body.email, hashedPassword, Id, date.toUTCString(), Id]);
            const ans = await pool.query(`SELECT id, name, email from users WHERE email = $1`, [req.body.email]);
            return  resolve({status: RES_STATUS.SUCCESS, user: ans.rows[0]});//resolve(ans.rows[0]);
        }
        catch (err) {
            return reject(err);
        }
    });
}

// It is a function to login of @type string and  takes @params as req of type IGetUserAuthInfoRequest and returns string.
export const login = async (req: IGetUserAuthInfoRequest) : Promise<Users> => {
    return new Promise(async (resolve, reject) => {
        try {
            const validate: Users | null = Loginvalidator(req);
            if(validate)
                return resolve(validate);
            let passcode = await pool.query(`SELECT passcode, role FROM users WHERE Email = $1`, [req.body.username]);
            if(!passcode.rowCount)
                return resolve({status: RES_STATUS.BAD_REQUEST, message: 'Invaild username'});
            const passkey = passcode.rows[0];
            if(await bcryptjs.compare(req.body.password, passkey.passcode)){
                const username: string = req.body.username;
                const user: User = { email: username, role: passkey.role};
                const accessToken: string = jwt.sign(user, String(process.env.ACCESS_TOKEN_SECRET), {expiresIn: "120s"});
                return resolve({status: RES_STATUS.SUCCESS, message: accessToken});
            }
            else
                return resolve({status: RES_STATUS.UNATHURIZED, message:'Invalid Password'});
        }
        catch (err) {
            return reject(err);
        }
    });
}


// It is an middle ware to authenticate token passed by user with @params req, res and next of @types IGetUserAuthInfoRequest,
//  Response, NextFunction respectively.
export function authenticate(req: IGetUserAuthInfoRequest, res:Response, next: NextFunction){
    const token: string | undefined = req.headers.authorization?.split(' ')[1];
    if(!token)
        return res.status(RES_STATUS.UNATHURIZED).send('Requires Token or authentication');
    jwt.verify(token, String(process.env.ACCESS_TOKEN_SECRET), (err: any, user: any) => {
        if(err)
            return res.status(RES_STATUS.UNATHURIZED).send('Invalid Token');
        req.user=user;
        next();
    });
}
