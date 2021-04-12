const express = require('express') ;
const app = express() ;
const port = 3000 ;
var db_name = "scmi" ;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/" + db_name ;
var cont ;
var sensors_state ;


app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
  });

MongoClient.connect(url, function(err,db) {
  if (err) throw err;
  var dbo = db.db("scmi");
  console.log("connected successfully to database !");
  
dbo.collection("containers_available").find({}).toArray(function(err,res){
  if (err) throw err ;
  cont=res ;
})

dbo.collection("sensors_data").find({}).toArray(function(err,res){
  if (err) throw err ;
  sensors_state = res ;
})

//db.close();
})

app.get('/',function(req,res){
    res.send('hello world') ;
})

app.get('/containers',function(req,res){
res.send(cont) ;
})

app.get('/sensors_mesures',function(req,res){
  res.send(sensors_state) ;
}) ;

app.listen(port,()=> {
console.log("app listening on port "+ port) ;
})



