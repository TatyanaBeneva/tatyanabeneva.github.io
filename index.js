const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
// const https = require('https');
const fs = require('fs');
const path = require('path')
const nodemailer = require('nodemailer');
const cors = require('cors')
const pass = require('./.vscode/settings.json')
const config = require('./config')

const corsOptions = {
  // origin: 'http://localhost:3000',
  origin: 'https://tatyanabeneva.github.io',
  credentilas: true
}

// const options = {
//   key: fs.readFileSync('key.pem', 'utf8'),
//   cert: fs.readFileSync('certificate.pem', 'utf8')
// };

const app = express();
const route = express.Router();

// const header = {
//   'Access-Control-Allow-Headers': 'X-Custom-Header'
// }

app.use(express.static(path.join(__dirname, 'client' ,'/public')))
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(function(req, res, next) {
//   res.setHeader(header);
//   next();
// });
app.use('/', route)

// console.log that your server is up and running
http.createServer(app).listen(config.port, () => {
  console.log(`Listening on port ${config.port}`)
});
// https.createServer(options, app).listen(config.port, () => {
//   console.log(`Listening on port ${config.port}`)
// });

// app.listen(config.port, () => console.log(`Listening on port ${config.port}`));

// create a GET route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client' ,'/public', 'index.html'));
});

// create reusable transporter object using the default SMTP transport

const transporter = nodemailer.createTransport({
  port: 465,               // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: 'portfolio.t.v.b@gmail.com',
    pass: pass['terminal.integrated.env.windows'].EMAIL_PASS,
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
    from: 'portfolio.t.v.b@gmail.com',  // sender address
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
    from: 'portfolio.t.v.b@gmail.com',  // sender address
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
    // .send({message: "Mail send", message_id: info.messageId})
  });
})

