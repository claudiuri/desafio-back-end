require('dotenv').config();
const express = require('express');
const app = express();

require('./startup/session')(app);
require('./startup/routes')(app);
require('./startup/db')();

const port = process.env.PORT || 3000;
app.listen(port, () => { console.info(`Server on port ${port}!`) });