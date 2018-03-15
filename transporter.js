const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "emailaddress@gmail.com",
    pass: "emailpassword"
  }
});

module.exports = transporter;
