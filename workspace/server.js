var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var data = [{id:1},{id:2},{id:3},{id:4},{id:5}]
var app = express();
var Sequelize = require("sequelize");
var models = require("./models");
app.use(bodyParser.json());
app.use(cors());
var Campionat = models.Campionat;


var nodeadmin = require('nodeadmin');
app.use(nodeadmin(app));


/**
//create a new resource
app.post('/echipa',function(request, response){
    response.status(201).send(request.body);
});


//Read all data
app.get('/echipa',function(request,response){
    response.status(200).send([data]);
});

//READ one by id
app.get('/[echipa]/:id',function(request, response){
    
   response.status(200).send(data[0]); 
});

//Delete one by id
app.delete('/[echipa]/:id', function(request,response){
    
    response.status(201).send('Team with id number:' + request.params.id + 'was deleted');
});

//init Sequelize connection

var sequelize = new Sequelize ('mysql', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});


//Connect to Database

sequelize.authenticate().then(function (e) {

	if(e) {

		console.log('Error while trying to connect to database');

	} else {

		console.log('Connection has been established successfully');

	}

});
//define entity 
    
sequelize.sync({

	force: true,

	logging: console.log



}).then(function () {

	console.log('Everything is synced');

}),*/

// REST methods
app.use(require("./Routes/Echipa.js"));
app.use(require("./Routes/Campionat.js"));

app.listen(process.env.PORT);