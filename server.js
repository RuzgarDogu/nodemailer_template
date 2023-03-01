/*
    Video: https://www.youtube.com/watch?v=38aE1lSAJZ8
    Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps TODO:
*/

require("dotenv").config();

const nodemailer = require("nodemailer");
const hbs = require("nodemailer-handlebars");
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
  host: "srvc96.turhost.com",
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: "beyza@kscgroup.org",
    pass: "5nU&94+!",
  },
});
// Step 2
transporter.use(
  "compile",
  hbs({
    viewEngine: "express-handlebars",
    viewPath: "./views/",
  })
);

// Step 3
let mailOptions = {
  from: "beyza@kscgroup.org", // TODO: email sender
  to: "mizansenmedya@gmail.com", // TODO: email receiver
  subject: "Nodemailer - Test",
  text: "Wooohooo it works!!",
  template: "index",
  context: {
    name: "Accime Esterling",
    date: "12 May 2020",
    time: "10:00 AM",
    pax: "2+1",
  }, // send extra values to template
};

// Step 4
transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    return log("Error occurs", err);
  }
  return log("Email sent!!!");
});
