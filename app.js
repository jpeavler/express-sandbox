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
app.use(express.json());

let index = 1;
const tvShows = [
    {
        Title: "Columbo",
        Seasons: 10,
        Actor: "Peter Falk",
        ID: 1
    }
];

app.get('/TVshows', function (req, res) {
    res.send(tvShows);
  });

app.post('/TVshows', function (req, res) {
    const body = req.body;
    tvShows.push(body);
    body.ID = ++index;
    res.send(body);
  });

app.put('/TVshows', function (req, res) {
    const foundIndex = tvShows.findIndex((element) => req.body.ID === element.ID);
    let result;
    if(foundIndex == -1){
        tvShows.push(req.body);
        req.body.ID = ++index;
        result = {notice: "No object with that Id exists, created new object instead." };
    }else{
        tvShows.fill(req.body, foundIndex, foundIndex+1);
        result = tvShows[foundIndex];
    }
    res.send(result);
  });

app.patch('/TVshows', function (req, res) {
    const foundIndex = tvShows.findIndex((element) => req.body.ID === element.ID);
    let result;
    let keyArray = [];
    if(foundIndex == -1){
        result = {error: "No object with that Id exists." };
    }else{
        keyArray = Object.keys(req.body);
        keyArray.forEach((element) => tvShows[foundIndex][element] = req.body[element]);
        result = tvShows[foundIndex];
    }
    res.send(result);
  });

app.delete('/TVshows', function (req, res) {
    const foundIndex = tvShows.findIndex((element) => req.body.ID === element.ID);
    let result;
    if(foundIndex == -1){
        result = {error: "Id not found"};
    }else{
        result = tvShows[foundIndex];
        tvShows.splice(foundIndex,1);
    }
    res.send(result)
  });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));