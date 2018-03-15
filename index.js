const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const transporter = require("./transporter");

const app = express();

app.get("/", (req, res) => res.send("Express Mail Server!"));
app.get("/sendmail", (req, res) => {
  var from = req.query.from;
  var to = req.query.to;
  var subject = req.query.subject;
  var text = req.query.text;

  var emailToSend = { from, to, subject, text };

  transporter.sendMail(emailToSend, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.send("Email has been submitted. Thanks.");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
