const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path')
const nodemailer = require('nodemailer');
const cors = require('cors')
const pass = require('./.vscode/settings.json')
const config = require('./config')

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}

// var allowedOrigins = ['http://localhost:3000','https://tatyanabeneva.github.io'];

// const corsOptions = {
//   origin: function(origin, callback){    // allow requests with no origin 
//     // (like mobile apps or curl requests)
//     if(!origin) return callback(null, true);    
//     if(allowedOrigins.indexOf(origin) === -1){
//       var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }   
//     return callback(null, true);
//   },
//   credentials: true,
//   exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar']
// }

const app = express();
const route = express.Router();

app.use(express.static(path.join(__dirname, '../client' ,'/public')))
app.use(cors(corsOptions))
// app.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', 'https://tatyanabeneva.github.io');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', route)

http.createServer(app).listen(config.port, () => {
  console.log(`Listening on port ${config.port}`)
});

app.get('/', (req, res) => {
  console.log('server')
  res.sendFile(path.join(__dirname, '../client' ,'/public', 'index.html'));
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

