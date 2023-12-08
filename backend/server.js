const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors =require("cors")
const app = express();
const colors = require("colors");
require('dotenv').config();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors())


app.post('/send-email', (req, res) => {
  const { name, phone } = req.body;


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'ravi@anchors.in',
    subject: 'Request a call back',
    text: `Name: ${name}\nPhone: ${phone}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.bgYellow.bold);
});
