const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const groups = require('./routes/api/groups');
app.use('/api/groups', groups);

const students = require('./routes/api/students');
app.use('/api/students', students);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
