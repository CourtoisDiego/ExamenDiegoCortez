let Express = require('express');
let Router = Express.Router();
let ordenes = require('./api/ordenes');

Router.use('/ordenes',ordenes);








module.exports = Router;