const express = require('express');
const routing = express.Router();
const service = require('../services/languageServices')

//fetching count of response in query parameter
routing.get('/count',service.fetchCount);

//fetching a page response in query parameter
routing.get('/',service.fetchPage);

//post the data to DB
routing.post('/',service.createEntry);

//update the data in DB
routing.put('/:id',service.updateEntry);

//delete the data from DB
routing.delete('/:id',service.deleteEntry);


module.exports = routing