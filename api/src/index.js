const path = require('path');
const express = require('express');
const cors = require('cors');
const { port } = require('./config');
const { uuidv4 } = require('./util');
const { save, getAll, remove, getByUserId } = require('./repository');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../public')))

const router = express.Router();
app.use('/api', router);

router.get('/greeting', (req, res) => {
  res.status(200)
    .send('Hello, World!');
});

//generate code
//attach to user

router.post('/code', (req, res) => {
  const data = uuidv4();
  const userId = req.body.id;
  const codeSaved = saveUserData(userId, {code: data});

  res.status(200).send(codeSaved);
});

router.post('/login', (req, res) => {
  const data = uuidv4();
  const userId = req.body.id;
  const tokenSaved = saveUserData(userId, {token: data});

  res.status(200).send(tokenSaved);
});

saveUserData = (userId, data) => {  
  const userData = getByUserId(userId) || {};

  return save(userId, { ...userData, ...data });
}

router.delete('/login', (req, res) => {
  const token = req.headers['x-api-token'];
  remove(token);
  res.status(204).send();
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
