const express = require('express');
const router = express.Router();
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const users = [];

//Get 

const getUsers = router.get('/users', (req, res) => {
  res.status(200).json(users);
});

//Post

const createUser = router.post('/user', (req, res) => {
  const user = {
    id: req.body.id,
    name: req.body.name,
  };

  users.push(user);

  res.status(201).json({ message: `User ${user.name} created with successfull` });
});


app.use(getUsers);
app.use(createUser);

app.listen(3000, () => {
  console.log('Servidor rodando com sucesso!! Aêeeee')
})