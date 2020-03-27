const path = require('path');
const express = require('express');
const cors = require('cors');
const { port } = require('./config');
const { uuidv4 } = require('./util');
const { save, getAll, getByUserId } = require('./repository');

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

router.post('/login', (req, res) => {
  const userId = req.body.id;
  const token = uuidv4();

  const userData = getByUserId(userId) || {};

  save(userId, { ...userData, token });

  res.status(200).send(token);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
