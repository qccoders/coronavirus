const path = require('path');
const express = require('express');
const cors = require('cors');
const { port } = require('./config');

const app = express();

app.use(cors());
app.use('/', express.static(path.join(__dirname, '../public')))

const router = express.Router();
app.use('/api', router);

router.get('/greeting', (req, res) => {
  res.status(200)
    .send('Hello, World!');
});

app.listen(port, () => console.log(`Listening on port ${port}!`));