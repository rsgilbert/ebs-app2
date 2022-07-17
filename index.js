const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('tiny'))

app.get('/', (req, res) => res.send('Success, running'));
app.get('/test', (req, res) => res.send("Test successful. App is running"));
app.get('/romero', (req, res) => res.send("I am romero lukaku"))
const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log('running on port', port));




