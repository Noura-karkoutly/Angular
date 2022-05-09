const express= require ('express')
const app =express()
const port = 3000

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://db_User:qv4OGukZ9yJoGoO0@cluster0.x51aj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database connected!");
  var dbo = db.db("App_user")});

//############################################################

app.use(express.json());

const UserRouter = require ('./routes/users');

app.use('/users',UserRouter);

//'localhost:3000/users'

