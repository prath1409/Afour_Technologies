const services = require('../Services/userService2');

const fullList = async (req, res)=>{
    try{
        const result =  await services.allContacts();
        if(result.length === 0)
            res.status(404).send('Not found list');
        else
            res.status(200).send(result);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}
const specificContact = async (req, res)=>{
    try{
        const result =  await services.contactId(req.params.id);
        if(!result)
            res.status(404).send('The contact with given ID was not found');
        else
            res.status(200).send(result);

    }
    catch(err){
        res.status(500).send(err.message);
    }
}

const createContact = async (req, res)=>{
    try{
        const result = await services.newContact(req);
        if(result === 'idnotallowed')
            res.status(400).send('Id cannot be added in parameters');
        else if(result === 'notname')
            res.status(400).send('Name is required');
        else if(result === 'notphonenumber')
            res.status(400).send('Phone number is required');
        else if(result === 'notendigit')
            res.status(400).send('Phone number should be of 10 digit');
        else if(result === 'no2params')
            res.status(400).send('Only two parameters')
        else
            res.status(200).send(result);
    }
    catch(err){
        res.status(500).send(err.message);
    }
} 

const updateContact = async (req, res)=>{
    try{
        const result = await services.updatContact(req);
        if(result === 'notcontact')
            res.status(404).send('The contact with given ID was not found');
        else if(result === 'notnamephone')
            res.status(400).send('Name or  phone number required');
        else if(result === 'notendigit')
            res.status(400).send('Phone number should be of 10 digit');
        else    
            res.status(200).send(result);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}

const removeContact = async (req, res)=>{
    try{
        const result = await services.deleteContact(req.params.id);
        if(result==' ')
            res.status(404).send('The contact with given ID was not found');
        else    
            res.status(200).send(result);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}
module.exports = {
    
    fullList: fullList,
    specificContact: specificContact,
    createContact: createContact,
    updateContact: updateContact,
    removeContact: removeContact
};