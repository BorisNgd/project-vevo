var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routes');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var options = {
    useNewUrlParser:true,
    useUnifiedTopology:true
};
mongoose.connect('mongodb://localhost:27017/boris' ,options, (err) => {
    if(err){
        console.log(err);
    }
    else{
        var db = mongoose.connection;
        if(!db)
        {
        console.log('Error to connecting database');
        }else
        {
            console.log('Connected Success');
        }
    }

});



app.use('/api' , router);

app.listen(3000 , (req , res) => {
    console.log('Server Running on port 3000');
})