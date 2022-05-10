//const { Db1 } = require('./Connect_DB.js');
const mongoose = require('mongoose')
const express= require ('express')
const app =express()
const port = 3000

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://db_User:qv4OGukZ9yJoGoO0@cluster0.x51aj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  var dbo = db.db("App_user");

  //db.close();

//###################################################
  //1- Add new todo for specific User
//###################################################

var dbo = db.db("App_user");
const new_todo = "{ id: 5, name: Portuguese}";
 
const query ={"name":"Jack"};

const updateDocument = {
$push: { "todo": new_todo }
};
const result =  dbo.collection("Users").updateOne(query, updateDocument);

console.log("A new todo has been added to the user =Jack");
 
//###################################################
  //2- Update an existing todo for specific User
//###################################################

dbo.collection("Users").updateOne(
  { name:"Smith" },
  { $set: { "todo.$[elem].name" : "Chinses" } },
  {arrayFilters: [ { "elem.no": "1" } ]
})

console.log("The todo has been updated to the user =Smith"); 

//###################################################
  //3- Delete an existing todo for specific User
//###################################################


dbo.collection("Users").updateOne(
  { name:"Carl" },
  { $pull: { todo: {"no": "3","name": "Spanish"  }}}
  )

console.log("The todo has been deleted for the user =Carl");

//###################################################
  //4- Get Todo information for specific User
//###################################################

function get_todo (given_name, todo_id)
{

 dbo.collection("Users").findOne({name:given_name}, function(err,info1)
{
  if (err)
  return done(err);
  if (info1)
  {
    //var result1 = info1.
    console.log(info1.todo[todo_id]);
  }
}) 
}

//Call get_todo function

get_todo ("Carl",0);

//###################################################
  //5- Get ALL Todo information for specific User
//###################################################


function get_ALLtodo (given_name)
{

 dbo.collection("Users").findOne({name:given_name}, function(err,info1)
{
  if (err)
  return done(err);
  if (info1)
  {
    //var result1 = info1.
    console.log(info1.todo);
  }
}) 
}

//Call get_ALLtodo function

get_ALLtodo ("Carl");

mongoose.connection.close();

});


