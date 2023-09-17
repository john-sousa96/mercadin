const express  = require('express');
const server = express();
const filmes = require('.src/data/teste.json');

server.get('/', (req, res)=> {
    return res.json(filmes)
});

server.listen(3000, () => {
    console.log('Servidor está funcionando...')
});