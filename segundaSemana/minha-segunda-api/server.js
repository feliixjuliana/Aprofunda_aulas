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

blogRouter.post('/text', (req, res) => {
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

blogRouter.get('/text', (req, res) => {
    res.json(textList);
});

blogRouter.get('/text/:id', (req, res) => {
    const id = req.query.id;
    const textFound = textList.find(text => text.id === id)
    res.json(textFound);
});

blogRouter.patch('/text/:id', (req, res) => {
    const id = parseInt(req.params);
    const {title, content, status, author} = req.body;

    const textFound = textList.find(text => text.id === id);

    if (title != null){
        textFound.title = title
    };

    if(content != null){
        textFound.content = content;
    }

    if(status != null){
        textFound.status = status;
    }

    if(author != null){
        textFound.author = author
    }

    res.json({message: `Texto com id ${id} editado com sucesso!!`})
});

blogRouter.delete('/text/:id', (req, res) => {
    const {id} = req.params;

    const listUpdated = DataTransferItemList.filter(text => text.id === id);

    res.json(listUpdated)
})

app.use(blogRouter);
app.listen(PORT, console.log(`Porta rodando na porta ${PORT}!!!`))
