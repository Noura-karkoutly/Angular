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
        name:'Smith',
        email: 'Smith@gmail.com',
        todo: [
            {
                no:"1",
                name:"Chinses"
            }
        ]

    },
    {
        name: 'Harry',
        email: 'Harry@gmail.com',
        todo: [
            {
                no:"2",
                name:"English"
            }
        ]
    },
    {
        name: 'Carl',
        email: 'Carl@gmail.com',
        todo: [
            {
                no:"4",
                name:"English"
            }
            ,
            {
            no: "5",
            name: "Portuguese"
            }
        ]
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
