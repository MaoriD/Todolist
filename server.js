const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 3000;

app.set( 'views', __dirname + '/www' ); 
app.use( express.static(path.join(__dirname, 'www')) );

const frontRoute = require('./routes/front');
const apiRoute = require('./routes/api');

app.use('/', frontRoute);
app.use('/api', apiRoute);

app.engine( 'html', ejs.renderFile );
app.set( 'view engine', 'ejs' );

app.listen( port, () => console.log(`Le serveur est lancé sur le port ${port}`) );