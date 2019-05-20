var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ashish@paceinfonet.com',
    pass: 'ashish$123 123'
  }
});

var mailOptions = {
  from: 'ashish@paceinfonet.com',
  to: 'ashish@paceinfonet.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Mail Received using nodejs</h1>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});