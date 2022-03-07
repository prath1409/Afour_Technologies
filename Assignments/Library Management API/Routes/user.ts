import { Request, Response, NextFunction, json } from 'express';
import express from 'express';
const router = express.Router();
const controller = require('../Controllers/userController'); 
const services = require('../Services/logservice');
import {logger} from '../Controllers/userController';
import {authenticate} from '../Services/logservice'



router.post('/register', controller.registerUser);

router.post('/login', controller.logger);

router.post('/addBooks', services.authenticate, controller.setbooks);

router.get('/availableBooks', services.authenticate, controller.getAvailBooks);



module.exports = router;












// router.put('/raiseBooks', services.authenticate, controller.putIssueBooks);




























// router.get('/issuedBooks', services.authenticate, controller.getIssuedBooks);

// router.delete('/student/returnBooks', services.authenticate, controller.deleteIssuedBooks)
