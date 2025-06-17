const express = require('express');
const router = express.Router;
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Olá, mundo')
})

app.listen(3000)
