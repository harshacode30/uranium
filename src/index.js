const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const mongoose = require('mongoose')

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://Functionup:IQ1sm0JhoRoUjMS6@cluster0.cbbcd.mongodb.net/harsha-db",    {
    maxPoolSize: 50, 
    wtimeoutMS: 2500,
    useNewUrlParser: true
})
.then( () => console.log("Mongodb is connected"))
.catch( err => console.log(err))

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 4000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});
