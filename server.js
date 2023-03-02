require("dotenv").config();

const nodemailer = require("nodemailer");
const hbs = require("nodemailer-handlebars");
const log = console.log;

let transporter = nodemailer.createTransport({
  host: "srvc96.turhost.com",
  port: 465,
  secure: true,
  auth: {
    user: "beyza@kscgroup.org",
    pass: "5nU&94+!",
  },
});

transporter.use(
  "compile",
  hbs({
    viewEngine: "express-handlebars",
    viewPath: "./views/",
  })
);

let mailOptions = {
  from: "beyza@kscgroup.org",
  to: ["mizansenmedya@gmail.com","emresahin@msn.com","ghaith.1996kha@gmail.com","muhammed.bayraktar@arniva.com.tr"],
  subject: "Maxtoria Reservation Confirmation",
  text: "Great!! Your Booking is Confirmed",
  template: "index",
  context: {
    mailtitle: "Your Booking is Confirmed",
    previewtext: "Your Booking is Confirmed for 12 May 2023 10:00 AM with ARHODES TO MARMARIS FULL DAY TRIP BY BOAT for 2 Adult + 1 Child. Total Price is $1,000.00. Your Booking Code is 123456.",
    code: "123456",
    qrcode: "https://mcusercontent.com/714fb9eb1784952a178c0c62e/images/23f005de-1989-56cf-03b6-829884671971.png",
    day: "12",
    month: ("May").toUpperCase(),
    year: "2023",
    time: "10:00 AM",
    name: ("Accime Esterling").toUpperCase(),
    pax: ("2 Adult + 1 Child").toUpperCase(),
    totalprice: "$1,000",
    paymentTypeIsCash: true,
    paymentTypeText: ("Cash on Date").toUpperCase(),
    operatorname: ("ARHODES TO MARMARIS FULL DAY TRIP BY BOAT").toUpperCase(),
    operatorimage: "https://mcusercontent.com/714fb9eb1784952a178c0c62e/images/251ddd37-3064-e6f2-e52e-caa3cbcd915e.png",
    operatorcategory: "Boat Trip",
    operatoraddress: "Marmaris, Turkey",
    operatorsupplier: ("ARHODES").toUpperCase(),
    option: ("Full Day").toUpperCase(),
    pickuptime: "09:00 AM",
    hotel: ("Hilton Hotel, Marmaris").toUpperCase(),
    roomno: "101",
    extras: ("Extra 1 X 2, Extra 2 X 5, Extra 3 X 1").toUpperCase(),
  }
};

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    return log("Error", err);
  }
  return log("Email sent!!!");
});
