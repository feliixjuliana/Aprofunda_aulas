const express = require('express');
const router = express.Router();
const cors = require('cors');
const nomes = require('./dados.json')

const app = express();
app.use(express.json());
app.use(cors());

//Rotas simples
app.get('/', (req, res) => {
  res.send('Olá, Mundo!');
});

const ola = router.get('/ola', (req, res) => {
  res.send('Olá estudantes maravilhosas do Aprofunda')
})

const alunas = router.get('/alunas', (req, res) => {
  res.json(nomes)
})

app.use(alunas)


app.use(ola)
app.listen(3000, () => { console.log('Servidor rodando com sucesso na porta 3000!!') })

