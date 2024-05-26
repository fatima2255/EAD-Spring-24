const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('./utils/db');


const Routes=require('./routes/Routes.js');
app.use('/api',Routes);


app.use(bodyParser.json());

app.listen(port, () => {
console.log('Server is listening on port ${port} ');
});