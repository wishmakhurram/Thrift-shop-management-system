const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure: false,
    auth:{
        user:"publicmail760@gmail.com",
        pass:"hxbxvhbidtvzsnsj",
    }

});

module.exports = {transporter};