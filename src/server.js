const express = require('express')
require('dotenv').config();
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

configViewEngine(app);

app.use('/v1',webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})