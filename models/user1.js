const mongoose = require('mongoose')
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

const mongoose = require('mongoose');

const usersSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true

        },
        email: {
            type: String,
            required: true 
        },
        todo:
        {
             type: [{no : String, 
                     name: String}],
             required:true   
        }
    }
);

module.exports= mongoose.model('Users',usersSchema);

