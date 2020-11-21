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
const multer = require('multer');
const Paytm = require('paytmchecksum');

//paytm checksum
var PaytmChecksum = require("./PayTm/checksum");

//multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
const upload = multer({ storage: storage })

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
  if (req.body.uid) {
    db.collection('FormUsers').doc(req.body.uid).collection("Forms").doc(req.body.part).set(req.body).then(result => {
      res.sendFile(path.join(__dirname + '/Pages/DataSaved.html'));
      return;
    }).catch(e => {
      res.send(e);
    })
  } else {
    res.sendFile(path.join(__dirname + '/Pages/NotSignedIn.html'))
  }

})

//final step
app.post('/send', urlencodedParser, function (req, res) {

  //get data and form json for the pdf
  var formData = null;
  var student = null;
  var parent = null;

  /*db.collection('FormUsers').doc(req.body.uid).collection("Forms").doc("student")
    .get()
    .then(snapshot => {
      if (snapshot.exists) {
        db.collection('FormUsers').doc(req.body.uid).collection("Forms").doc("parents")
          .get()
          .then(snapshot1 => {
            if (snapshot1.exists) {
              parent = snapshot1.data()

              student = snapshot.data()

              formData = Object.assign(student, parent);

              //creating pdf
              /*
              pdf.create(pdfTemplate(formData), {}).toFile(formData.name + '-Form.pdf', (err) => {
                if (err) {
                  res.send(Promise.reject());
                }
              })
            }

          })
      }
    })

  //mailing the form
  sgMail.setApiKey("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")
  const msg = {
    to: 'superstark02@gmail.com', // Change to your recipient
    from: 'mail@pidgin.online', // Change to your verified sender
    subject: 'Pidgin - Your Common Admission Form',
    text: 'This is an automated mail from Pidgin Website.',
    html: '<strong>This is an automated mail from Pidgin Website.</strong>',
  }
  sgMail
    .send(msg).catch(err => {
      console.log(err);
    });

  res.sendFile(`${__dirname}/Pages/DataSaved.html`)
  */
  res.sendFile(`${__dirname}/Pages/DataSaved.html`)
})

app.post('/final-pay', (req, res) => {

  // Route for making payment

  var paymentDetails = {
    amount: req.body.amount,
    customerId: req.body.name,
    customerEmail: req.body.email,
    customerPhone: req.body.phone
  }
  if (!paymentDetails.amount || !paymentDetails.customerId || !paymentDetails.customerEmail || !paymentDetails.customerPhone) {
    res.status(400).send('Payment failed')
  } else {
    var params = {};
    params['MID'] = config.PaytmConfig.mid;
    params['WEBSITE'] = config.PaytmConfig.website;
    params['CHANNEL_ID'] = 'WEB';
    params['INDUSTRY_TYPE_ID'] = 'Retail';
    params['ORDER_ID'] = 'TEST_' + new Date().getTime();
    params['CUST_ID'] = paymentDetails.customerId;
    params['TXN_AMOUNT'] = paymentDetails.amount;
    params['CALLBACK_URL'] = 'http://localhost:3000/callback';
    params['EMAIL'] = paymentDetails.customerEmail;
    params['MOBILE_NO'] = paymentDetails.customerPhone;


    checksum_lib.genchecksum(params, config.PaytmConfig.key, function (err, checksum) {
      var txn_url = "https://securegw-stage.paytm.in/theia/processTransaction"; // for staging
      // var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production

      var form_fields = "";
      for (var x in params) {
        form_fields += "<input type='hidden' name='" + x + "' value='" + params[x] + "' >";
      }
      form_fields += "<input type='hidden' name='CHECKSUMHASH' value='" + checksum + "' >";

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' + txn_url + '" name="f1">' + form_fields + '</form><script type="text/javascript">document.f1.submit();</script></body></html>');
      res.end();
    });
  }

})


//extra function
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.backend = functions.https.onRequest(app);
module.exports = router;
