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


// const express = require('express')
//  const nodemailer = require('nodemailer') 

// const app = express()

// const port = 5000

// function sendEmail(){

// return new Promise((resolve, reject) => {
//  var transporter = nodemailer.createTransport({ 
//     service: 'gmail',
//     auth:{
//      user: 'magicalfoodie123@gmail.com',
//      pass: 'zqopyrgplmuzllwn'

// }

// })

// const mail_configs ={

// from: 'magicalfoodie123@gmail.com',

// to:'magicalfoodie123@gmail.com' ,

// subject: 'Testing Email',

// text: "Justing checking if this email will be sent"

// }

// transporter.sendMail(mail_configs, function(error, info){ 
//     console.log(error)

//     if (error) {

//         console.log(error) 
//         return reject({message: `An error has occured`})
        
//         }
        
//         return resolve({message:"Email sent succesfuly"})
        
//         })
        
//         })
//     }  
//     app.get('/',(req,res)=>{
//         sendEmail()
//         .then(res.send(response.message))
//         .catch(error=>res.status(500).send(error.message))
//     })
//         app.listen(port, () => {
        
//         console.log(`nodemailerProject is listening at http://localhost:${port}`)
        
//         })