const express = require('express');
const cors = require('cors');
const { v4: uuidv4} = require('uuid');

const blogRouter = express.Router();
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//Model do texto: id, title, content, date, status, author

const textList = [];

blogRouter.post('/texts', (req, res) => {
    const { title, content, status, author} = req.body;

    const newText = {
        id: uuidv4,
        title: title,
        content: content,
        created_at: new Date().toLocaleDateString('pt-BR'),
        status: status,
        author: author,
    }

    textList.push(newText);
    res.status(201).json({message: `Texto ${title} foi criado com sucesso!`})
});

blogRouter.get('/texts', (req, res) => {
    res.json(textList);
});

blogRouter.get('/text', (req, res) => {
    const id = req.query.id;
    const textFound = textList.find(text => text.id === id)
    res.json(textFound);
});

app.use(blogRouter);
app.listen(PORT, console.log(`Porta rodando na porta ${PORT}!!!`))
