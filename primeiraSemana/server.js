const express = require('express') //Require -> Importando ele, lembrar que tem constantemente esse const

const app = express(); //Precisa instanciar para usar
const porta = 3000; //Porta que o projeto vai ser rodado

app.get('/', (req, res) => {
  res.send('Olá, Mundo!');
})