const functions = require('firebase-functions');
const express = require('express');
var bodyParser = require('body-parser')
const path = require('path');
const firebase = require("firebase");
const pdf = require('html-pdf');
const cors = require('cors');
const pdfTemplate = require('./Documents');
const sgMail = require('@sendgrid/mail');
const fs = require("fs");

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
app.listen(port, () => { console.log("Listening at " + port) })


//form data saving
app.post('/student', urlencodedParser, function (req, res) {

  //data saving
  db.collection('FormUsers').doc(req.body.uid).collection("Forms").doc(req.body.part).set(req.body).then(result => {
    console.log(result);
  })

  res.sendFile(path.join(__dirname + '/Pages/DataSaved.html'));
})

//final step
app.post('/send', urlencodedParser, function (req, res) {

  //creating pdf
  pdf.create(pdfTemplate(req.body), {}).toFile(req.body.name + '-Form.pdf', (err) => {
    if (err) {
      //mailing the form
      pathToAttachment = `${__dirname}/${req.body.name}-Form.pdf`;
      attachment = fs.readFileSync(pathToAttachment).toString("base64");
      sgMail.setApiKey("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")
      const msg = {
        to: 'sarthak2200032@gmail.com ', // Change to your recipient
        from: 'mail@pidgin.online', // Change to your verified sender
        bcc: 'ds.techin@gmail.com',
        subject: 'Testing Mail With Attachment',
        text: 'This is an automated mail from Pidgin Website.',
        html: '<strong>This is an automated mail from Pidgin Website.</strong>',
        attachments: [
          {
            content: attachment,
            filename: "Form.pdf",
            type: "application/pdf",
            disposition: "attachment"
          }
        ]
      }
      sgMail
        .send(msg).catch(err => {
          console.log(err);
        });

      res.send(Promise.reject());
    }
    res.send(Promise.resolve());
  })
})

app.get('/common_form', (req, res) => {
  //download pdf
  res.sendFile(`${__dirname}/Form.pdf`)
})

//extra function
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.backend = functions.https.onRequest(app);
module.exports = router;
