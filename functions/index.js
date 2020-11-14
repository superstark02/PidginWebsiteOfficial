const functions = require('firebase-functions');
const express = require('express');
var bodyParser = require('body-parser')
const path = require('path');

const app = express();
const router = express.Router();

app.use('/', router);
app.use(bodyParser.json())
app.set('view engine', 'html');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const port = process.env.PORT || 5000;

app.listen(port,()=>{console.log("Listening at 5000")})

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

app.post('/form/dummy', urlencodedParser, function(req, res){
  res.sendFile(path.join(__dirname+'/Pages/DataSaved.html'));
})


