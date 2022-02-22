const express = require('express');
const router = express.Router();
const controller = require('../Controllers/userController2');

router.get('/contacts', controller.fullList);

//  router for specific contact list display
router.get('/contacts/:id', controller.specificContact);



//  router for adding new contact 
router.post('/create-contact', controller.createContact);


//  router for updating specific contact
router.put('/update/:id', controller.updateContact);

//  router for deleting specific contact
router.delete('/delete/:id', controller.removeContact);

module.exports = router;