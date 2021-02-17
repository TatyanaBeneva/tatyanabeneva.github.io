const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const nodemailer = require('nodemailer');
const cors = require('cors')
require('dotenv').config();

const app = express();
const route = express.Router();

app.use(cors())
app.use(function (req, res, next){
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next()
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', route)

app.get('/', (req, res) => {
});

// create reusable transporter object using the default SMTP transport

const transporter = nodemailer.createTransport({
  port: 465,               // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL_NAME,
    pass: process.env.EMAIL_PASS,
  },
  secure: true,
});

route.get('/contact', (req,res) => {
  res.status(200).send('Contact page')
})

route.post('/contact', (req, res) => {
  const {name, email, message} = req.body
  console.log(req.body)
  const mailToMe = {
    from: process.env.EMAIL_NAME,  // sender address
    to: 'tatyana.v.beneva@gmail.com',   // list of receivers
    subject: name,
    text: message,
    html: message + `<br> From: ${email}`,
  };

  transporter.sendMail(mailToMe, (error, info) => {
    if(error) {
      return console.log(error)
    }

    res.redirect('/contact')
    res.status(200)
  });

  const mailToClient = {
    from: process.env.EMAIL_NAME,  // sender address
    to: email,   // list of receivers
    subject: "Contact form send successfully!",
    text: "Successful",
    html: `Hi! Thank you ${name} for reaching out to me. I will try to answer you as soon as possible!<br> Greatings, T.B`
  };


  transporter.sendMail(mailToClient, (error, info) => {
    if(error) {
      return console.log(error)
    }

    res.redirect('/contact')
    res.status(200)
  });
})

http.createServer(app).listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
});
