const express = require('express');
const app = express();
const port = 3000;

console.log('Welcome to my Express Web Server');    //not running on the front end

//app.get('/', (req, res) => {
//    console.log('Root Route Hit');
//    res.send('Hello World!');
//   });

    app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));