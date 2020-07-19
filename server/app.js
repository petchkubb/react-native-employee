const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./Employee');

app.use(bodyParser.json());

const Employee = mongoose.model('employee');

const mongoUrl =
  'mongodb+srv://admin:KIljMAe3Fpe3BFcv@employeecluster.1nck5.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => console.log('connected to mongo!!'));
mongoose.connection.on('error', (err) => console.log('error', err));

app.get('/', (req, res) => {
  res.send('welcome to node js');
});

app.post('/send-data', (req, res) => {
  const {name, email, phone, picture, salary, position} = req.body;
  const employee = new Employee({
    name,
    email,
    phone,
    picture,
    salary,
    position,
  });
  employee
    .save()
    .then((data) => {
      console.log(data);
      res.send('success');
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3000, () => {
  console.log('server running');
});
