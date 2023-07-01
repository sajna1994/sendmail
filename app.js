var nodemailer =require('nodemailer');
// const express = require("express");
// const app = express();
let mailTransporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"magicalfoodie123@gmail.com",
        pass:"zqopyrgplmuzllwn"
    }
});
let details={
    from:"magicalfoodie123@gmail.com",
    to:"sajnaaizanaufal@gmail.com",
    subject:"Hello,This is a test mail",
    text:"This is the body of the mail"
}
mailTransporter.sendMail(details,(err)=>{
    if (err) {
        console.log("it has an error",err);
    }
    else{
        console.log("email has send");
    }
})





var nodemailer = require('nodemailer');
const express = require("express");
const app= new express();
const PORT =5000;
var transporter = nodemailer.createTransport({ 
    service: 'gmail',

      auth: {

        user: 'magicalfoodie123@gmail.com', 
        pass: 'saju@naufalm'

}

});

var mailOptions = {

      from: 'magicalfoodie123@gmail.com', 
      to: 'sajnaaizanaufal@gmail.com', 
      subject: 'Sending Email using Node.js', 
      text: 'That was dsfgdfg not easy!'
};

transporter.sendMail(mailOptions, function (error, info){

if (error) {

    console.log(error);

} else {

console.log('Email sent:' + info.response);

}

});
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});


