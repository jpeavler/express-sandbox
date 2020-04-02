const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

console.log('Welcome to my Express Web Server');    //not running on the front end

//app.get('/', (req, res) => {
//    console.log('Root Route Hit');
//    res.send('Hello World!');
//   });

app.use(express.static('public'));

app.get('/contacts', function (req, res) {
    res.send('Hello World!')
  });

app.post('/contacts', function (req, res) {
    res.send('Got a POST request')
  });

app.put('/contacts', function (req, res) {
    res.send('Got a PUT request at /user')
  });

app.delete('/contacts', function (req, res) {
    res.send('Got a DELETE request at /user')
  });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));