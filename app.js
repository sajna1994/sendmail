const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:"magicalfoodie123@gmail.com",
            pass:"zqopyrgplmuzllwn" 
  }
});


const mailOptions = {
    from:"magicalfoodie123@gmail.com",
        to:"sajnaaizanaufal@gmail.com",
        subject:"Hello,This is a test mail",
        text:"This is the body of the mail"
    };

  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error occurred:', error);
      } else {
        console.log('Email sent successfully using gmail!');
      }
    });