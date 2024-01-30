const express = require("express");
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
const sobreController = require('./src/controllers/sobreController');

//rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

module.exports = route; 

//rotas de contato
route.get('/contato', contatoController.paginaInicial);

//rotas de sobre
route.get('/sobre', sobreController.paginaInicial);