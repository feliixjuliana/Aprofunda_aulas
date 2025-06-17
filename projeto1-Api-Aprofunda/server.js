const express = require('express');
const router = express.Router();
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const tasks = [];

//GET /tasks -> Listar todas as tarefas
const getTaks = router.get("/tasks", (req, res) => {
    res.status(200).json(tasks);
});

//POST /taks -> Criar uma tarefa
const createTask = router.post("/tasks", (req, res) => {
    const task = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description
    };

    tasks.push(task);
    res.status(201).json({message: "Tarefa criada com sucesso!!"}); 
}); 

//GET /taks/:id -> Busca uma tarefa especifica
const getTaksId = router.get("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id); // params -> Parâmetro da minha rota
    const task = tasks.find((t) => t.id === id)

    if(!task){
        return res.status(404).json({message: "tarefa não encontrada"})
    }

    res.status(200).json(task)
})


app.use(getTaks);
app.use(createTask);
app.use(getTaksId);

app.listen(3000, () => {
    console.log("Servidor de tarefa rodando com sucesso na porta http:")
})