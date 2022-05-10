const mongoose = require('mongoose')
const express= require ('express')
const app =express()
const port = 3000
const User = require ('./models/user')

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://db_User:qv4OGukZ9yJoGoO0@cluster0.x51aj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  var dbo = db.db("App_user");


const seedUSers = [
    {
        name:'Jack',
        email: 'Jack@gmail.com'

    },
    {
        name: 'Smith',
        email: 'Smith@gmail.com'
    },
    {
        name: 'Carl',
        email: 'Carl@gmail.com'
    }
]

const seedDB = async() => {
    await User.deleteMany({});
    await User.insertMany(seedUSers);
};

seedDB().then(()=> 
{
   mongoose.connection.close();
});


});