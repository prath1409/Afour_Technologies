import { Request, Response, NextFunction } from 'express';
//const logservices = require('../Services/logservice');
import * as logServices from '../Services/logservice'
import * as userServices from '../Services/userService'
import { IGetUserAuthInfoRequest, Users, Books} from "../Services/serviceTypes"

//  Controller function to register route of @type void and with @params req, res of 
//  @types IGetUserAuthInfoRequest,Response respectively.
export const registerUser = async (req: IGetUserAuthInfoRequest, res: Response): Promise<void> => {
    try {
        const result: Users = await logServices.Registration(req);
        if(result.message)
            res.status(result.status).send(result.message);
        else
            res.status(result.status).send(result.user);
    }
    catch (err: any) {
        res.status(500).send(err.message);
    }
}

//  Controller function to login route of @type void and with @params req, res of 
//  @types IGetUserAuthInfoRequest,Response respectively.
export const logger = async (req: IGetUserAuthInfoRequest, res: Response): Promise<void> => {
    try {
        const result: Users = await logServices.login(req);
        res.status(result.status).send(result.message);
    }
    catch (err: any) {
        res.status(500).send(err.message);
    }
}

//  Controller function to addBooks route of @type void and with @params req, res of 
//  @types IGetUserAuthInfoRequest,Response respectively.
export const setbooks =async (req: IGetUserAuthInfoRequest, res: Response): Promise<void> => {
    try {
        const result: Books = await userServices.addBooks(req);
        if(result.message)
            res.status(result.status).send(result.message);
        else
            res.status(result.status).send(result.book);
    }
    catch (err: any) {
        res.status(500).send(err.message);
    }
}

//  Controller function to availablebooks route of @type void and with @params req, res of 
//  @types IGetUserAuthInfoRequest,Response respectively.
export const getAvailBooks = async (req: IGetUserAuthInfoRequest, res: Response): Promise<void> => {
    try {
        const result: Books = await userServices.availableBooks(req);
        if (result.message)
            res.status(result.status).send(result.message);
        else
            res.status(result.status).send(result.books);
    }
    catch (err: any) {
        res.status(500).send(err.message);
    }
}



module.exports = {
    registerUser: registerUser,
    logger: logger,
    setbooks: setbooks,
    getAvailBooks: getAvailBooks
}



























// //  Controller function to raiseBook route of @type void and with @params req, res of 
// //  @types IGetUserAuthInfoRequest,Response respectively.
// export const putIssueBooks = async (req: IGetUserAuthInfoRequest, res: Response): Promise<void> => {
//     try {
//         const result: Books = await userServices.raiseBook(req);
//         if(result.message)
//             res.status(result.status).json(result.message);
//         else
//             res.status(result.status).json(result.book);
//     }
//     catch (err: any) {
//         res.status(500).send(err.message);
//     }
// }


// module.exports = {
//     registerUser: registerUser,
//     logger: logger,
//     setbooks: setbooks,
//     getAvailBooks: getAvailBooks,
//     putIssueBooks: putIssueBooks
// }














/*
//  Controller function to issuedBooks route of @type void and with @params req, res of 
//  @types IGetUserAuthInfoRequest,Response respectively.
export const getIssuedBooks = async (req: IGetUserAuthInfoRequest, res: Response): Promise<void> => {
    try {
        const result: Book | string = await userServices.issuedBooks(req.user);
        if (result == 'noissued')
            res.status(404).send('No issued books');
        else
            res.status(200).json(result);
    }
    catch (err: any) {
        res.status(500).send(err.message);
    }
}


//  Controller function to retrunBook route of @type void and with @params req, res of 
//  @types IGetUserAuthInfoRequest,Response respectively.
export const deleteIssuedBooks = async (req: IGetUserAuthInfoRequest, res: Response): Promise<void> => {
    try {
        const result: Book | string = await userServices.returnBooks(req, req.user);
        if (result == 'noissued')
            res.status(404).send('No issued books');
        else if (result == 'nobookid')
            res.status(400).send('Book Id required');
        else
            res.status(200).json(result);
    }
    catch (err: any) {
        res.status(500).send(err.message);
    }
}

*/