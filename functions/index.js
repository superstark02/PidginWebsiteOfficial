const functions = require('firebase-functions');
const express = require('express');
var bodyParser = require('body-parser')
const path = require('path');
const firebase = require("firebase");

//Firebase init
firebase.initializeApp({
  apiKey: 'AIzaSyCYoIBWm4Hw6kCP1P6jPWvqgJsXQdFmuPM',
  authDomain: "pidgin-ds.firebaseapp.com",
  projectId: "pidgin-ds"
});
var db = firebase.firestore();

//express init
const app = express();
const router = express.Router();

//app init
app.use('/', router);
app.use(bodyParser.json())
app.set('view engine', 'html');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const port = process.env.PORT || 5000;
app.listen(port,()=>{console.log("Listening at 5000")})


//form data process
app.post('/form/dummy', urlencodedParser, function(req, res){
  db.collection('FormUsers').doc("uid").collection("Forms").doc("Name").set(req.body).then(result=>{
    res.sendFile(path.join(__dirname+'/Pages/DataSaved.html'));
  })
})

//extra function
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


