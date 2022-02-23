const expresss = require('express');
const router = expresss.Router();
const controller = require('../Controllers/userController'); 



// router.post('/login', function(req:any, res:any){
//     controller.logger;
//   });

// router.get('/availableBooks', controller.getAvailBooks);

// router.get('/issuedBooks', controller.getIssuedBooks);

// router.get('/issuedBooks/:id', );

// router.get('/particularBook/:id', );

// router.put('/issuebooks/:id', );

// router.put('/returBooks/:id', );


router.post('/user', controller.getUsers);

router.post('/user/login', controller.logger);


module.exports = router;