import { Request, Response, NextFunction, json } from 'express';
import express from 'express';
const controller = require('../Controllers/userController'); 
const services = require('../Services/logservice');

const router = express.Router();
router.get('/simple', (req :Request, res: Response)=>{
    res.send('Hello');
})

router.post('/register', controller.registerUser);

router.post('/login', controller.userLogger);

router.post('/addBook', services.authenticateToken, controller.setBooks);

router.get('/availableBooks', services.authenticateToken, controller.getAvailBooks);

router.post('/requestBook', services.authenticateToken, controller.requestBook);

router.get('/issuedBooks', services.authenticateToken, controller.getIssuedBooks);

router.put('/returnBook/:id', services.authenticateToken, controller.returnIssuedBook);

router.get('/getStudentsByBookName/:id', services.authenticateToken, controller.getStudentData);

router.get('/getBooksByUserName/:id', services.authenticateToken, controller.getBooksData);

module.exports = router;

export default router;
