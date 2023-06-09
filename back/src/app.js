const express = require('express');
const config = require('./config');

const app = express();
const clients = require('./moduls/clients/routes');


// Configuration
app.set('port', config.app.port);

// Routes
app.use('/api/clients', clients);



module.exports = app;







