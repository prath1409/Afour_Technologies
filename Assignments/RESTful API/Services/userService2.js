// const req = require('express/lib/request');
// const res = require('express/lib/response');
const { rejects } = require('assert');
const e = require('express');
const fs = require('fs');
const { resolve } = require('path');
const path = require('path');
const fun = require('./phonelength');

const staticPath = path.join(__dirname, '../Views/index.html');
let contacts = JSON.parse(fs.readFileSync('./Database/store.json'));
let ids = JSON.parse(fs.readFileSync('./Database/indexs.json'));
if (Object.entries(contacts).length === 0)
    contacts = [];
else
    contacts = JSON.parse(fs.readFileSync('./Database/store.json'));
if (Object.entries(ids).length === 0)
    ids = [];
else
    ids = JSON.parse(fs.readFileSync('./Database/indexs.json'));

let ind = ids.length;



let allContacts = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            return resolve(contacts);
        }
        catch (err) {
            return reject(err);
        }
    });

}

let contactId = async (key) => {
    return new Promise(async (resolve, reject) => {
        try {
            const contact = contacts.find(c => c.id === parseInt(key));
            return resolve(contact);
        }
        catch (err) {
            return reject(err);
        }
    });

}
let newContact = async (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (req.body.id)
                return resolve('idnotallowed');
            if (!req.body.name)//|| !req.body.phone || req.body.phone.length != 10)
                return resolve('notname');
            if (!req.body.phone)
                return resolve('notphonenumber');
            if (fun.findlength(req.body.phone))
                return resolve('notendigit');
            if (Object.values(req.body).length != 2)
                return resolve('no2params');
            let contact = {
                id: 1,
                name: req.body.name,
                phone: req.body.phone
            };
            let iD = {
                id: 1
            }
            if (contacts.length >= 1) {
                ind = ind - 1;
                contact = {
                    id: ids[ind].id + 1,
                    name: req.body.name,
                    phone: req.body.phone
                };
                iD = {
                    id: ids[ind].id + 1
                }
            }
            ids.push(iD);
            contacts.push(contact);
            contacts = JSON.stringify(contacts);
            ids = JSON.stringify(ids);
            fs.writeFile('./Database/store.json', contacts, finished);
            fs.writeFile('./Database/indexs.json', ids, finished);
            function finished(err) {
                console.log('all set.');
            }
            return resolve(contact);
        }
        catch (err) {
            return reject(err);
        }
    });
}

let updatContact = async (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            const contact = contacts.find(c => c.id === parseInt(req.params.id));
            if (!contact)
                return resolve('notcontact');
            if (!req.body.name && !req.body.phone)
                return resolve('notnamephone');
            if (req.body.phone && fun.findlength(req.body.phone))
                return resolve('notendigit');
            contacts.forEach(contact => {
                if (contact.id === parseInt(req.params.id)) {
                    contact.name = req.body.name ? req.body.name : contact.name;
                    contact.phone = req.body.phone ? req.body.phone : contact.phone;
                }
            });
            contacts = JSON.stringify(contacts);
            fs.writeFile('./Database/store.json', contacts, finished);
            function finished(err) {
                console.log('all set.');
            }
            return resolve(contact);
        }
        catch (err) {
            return reject(err);
        }
    });
}

let deleteContact = async (key) => {
    return new Promise(async (resolve, reject) => {
        try {
            const contact = contacts.find(c => c.id === parseInt(key));
            if (!contact) {
                return resolve(' ');
            }
            const index = contacts.indexOf(contact);
            contacts.splice(index, 1);
            contacts = JSON.stringify(contacts);
            fs.writeFile('./Database/store.json', contacts, finished);
            function finished(err) {
                console.log('all set.');
            }
            let empty =JSON.parse(contacts);
            if (Object.entries(empty).length === 0){
                ids=[];
                ids=JSON.stringify(ids);
                fs.writeFile('./Database/indexs.json', ids, finished);
            }
            return resolve(contact);
        }
        catch(err){
            return reject(err);
        }
    });
}

module.exports = {
    allContacts: allContacts,
    contactId: contactId,
    newContact: newContact,
    updatContact: updatContact,
    deleteContact: deleteContact
}
