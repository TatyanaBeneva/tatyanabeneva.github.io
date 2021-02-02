const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const pass = require('./.vscode/settings.json')

const app = express();
const route = express.Router();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', route)

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
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

route.post('/contact', (req, res) => {
  const {name, email, message} = req.body

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
    // res.status(200).send({message: "Mail send", message_id: info.messageId})
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
    // res.status(200).send({message: "Mail send", message_id: info.messageId})
  });
})

