import { Request, Response, NextFunction } from 'express';
const services = require('../Services/userService');
// const logservices = require('../Services/logservice')

// const getAvailBooks = async (req, res)=>{
//     try{
//         const result =  await services.availableBooks();
//         res.status(200).json(result.rows);
//     }
//     catch(err){
//         res.status(500).send(err.message);
//     }
// }

// const logger = async (req:any, res:any)=>{
//     try{
//         const result =  await logservices.logfun(req);
//         res.json({result:result});
//     }
//     catch(err:any){
//         res.send(err.message);
//     }
// }
// const getIssuedBooks = async (req, res)=>{
//     try{
//         const result =  await services.issuedBooks();
//         res.status(200).json(result.rows);
//     }
//     catch(err){
//         res.status(500).send(err.message);
//     }
// }

// module.exports = {
//     getAvailBooks: getAvailBooks,
//     getIssuedBooks: getIssuedBooks
// }


const getUsers = async (req: Request, res: Response) => {
    try {
        const result = await services.CreateStudent(req);
        res.status(200).send(result);
    }
    catch (err: any) {
        res.status(500).send(err.message);
    }
}

const logger = async (req: Request, res: Response) => {
    try{
        const result = await services.login(req);
        res.status(200).json(result);
    }
    catch(err: any){
        res.status(500).send(err.message);
    }
}
module.exports = {
    getUsers: getUsers,
    logger:logger
}