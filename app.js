import express from 'express';
import nodemailer from 'nodemailer';
const app = express();
const port = 3000;

app.get('/email', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'live.smtp.mailtrap.io',
    port: 587,
    secure: false, // use SSL
    auth: {
      user: 'masoomfarru634@gmailcom',
      pass: '1a2b3c4d5e6f7g',
    }
  });
  
  // Configure the mailoptions object
  const mailOptions = {
    from: 'farheendigitalks@gmail.com',
    to: 'masoomfarru634@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  // Send the email
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log("Error:", error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});