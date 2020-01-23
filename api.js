var express = require('express');
var bodyParser = require('body-parser');

var server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));

var items = [   {
    "id": 1,
    "name": "Idriss",
    "address": "Logpom",
    "number": 699644662
},
{
    "id": 2,
    "name": "Carlos",
    "address": "Bonamoussadi",
    "number": 699644662
},
{
    "id": 3,
    "name": "Benjamin",
    "address": "Kotto",
    "number": 699644662
},
{
    "id": 4,
    "name": "Louise",
    "address": "PK17",
    "number": 699644662
}];

server.get('/item',(req , res) => {
    res.json(items);
});

server.get('/item/:id', (req , res) => {
    res.json(items[req.params.id-1]);
});

server.post('/item' , (req , res) => {
    items.push(req.body);
    res.json(req.body);
});

server.put('/item/:id' , (req , res) => {
    items[req.params.id-1] = req.body;
    items[id] = 
    res.json(req.body);
});

server.delete('/item/:id' , (req , res) => {
    items.splice(req.params.id , 1);
    res.json(req.body);
});

server.listen(3000 , (req , res) => {
    console.log('Server running on port 3000');
})