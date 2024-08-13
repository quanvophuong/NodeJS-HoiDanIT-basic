const express = require('express')
require('dotenv').config();
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

// config request body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

//config template engine
configViewEngine(app);

// routes
app.use('/',webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})