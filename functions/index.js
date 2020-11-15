const functions = require('firebase-functions');
const express = require('express');
var bodyParser = require('body-parser')
const path = require('path');
const firebase = require("firebase");
const pdf = require('html-pdf');
const cors = require('cors');
const pdfTemplate = require('./Documents');
const sgMail = require('@sendgrid/mail')

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
app.use(cors());
app.use('/', router);
app.use(bodyParser.json())
app.set('view engine', 'html');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const port = process.env.PORT || 5000;
app.listen(port, () => { console.log("Listening at 5000") })


//form data process
app.post('/form/dummy', urlencodedParser, function (req, res) {
  /*
  //data saving
  db.collection('FormUsers').doc("uid").collection("Forms").doc("Name").set(req.body).then(result => {
    res.sendFile(path.join(__dirname + '/Pages/DataSaved.html'));
  })

  //creating pdf
  pdf.create(pdfTemplate(req.body), {}).toFile(req.body.name + '-Form.pdf', (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  })*/

  //mailing the form
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'ds.techin@gmail.com', // Change to your recipient
    from: 'mail@pidgin.online', // Change to your verified sender
    subject: 'Test',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
    res.sendFile(path.join(__dirname + '/Pages/DataSaved.html'));
})

app.get('/fetch-pdf', (req, res) => {
  //download pdf
  res.sendFile(`${__dirname}/result.pdf`)
})

//extra function
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});


