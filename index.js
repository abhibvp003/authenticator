var express = require('express');
var app = express();
var username="abhi";

app.get('/', function (req, res) {
   res.send('Hello World');
})


app.get('/user/profile',function(req,res){
   if(req.headers["username"] && req.headers["username"]==username){
   //res.send("hello");
   res.send({ username: 'abhishek',dob:"12/12/2012",age: 34,email:"abhishek.kumar@gmail.com",phoneNumber:89809809897 });
  
   }
   if(req.headers["username"]!=null){
      console.log(req);

   }
})

app.get('/microservice/name',function(req,res){
   if(req.headers["username"]==username){
   console.log("user-microservice");
   }
})

app.post('/auth', function (req, res) {
   
   req.headers["username"];
   if(req.headers["username"]==username){
      console.log("successful");
      res.status(200).send("successful");

   }
   if(req.headers["username"]!=username){
      console.log("UnAuthorised")
      res.status(401).send("unAuthorised");

   }
   if(req.headers["username"]==null ){
      console.log("NULL");
      res.status(401).send("NULL");

   }
   
   })


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})