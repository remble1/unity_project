// A express server, which will handle api request coming in and respond back with a json object, it will use body parser as well as corse

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log('Example app listening');
})