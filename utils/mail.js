"use strict";
const nodemailer = require("nodemailer");


async function main(obj) {
  try {
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    //de aqui sale el mail
    host: process.env.SMTP,
    port: process.env.PORT_MAIL,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USER_MAIL, // generated ethereal user
      pass: process.env.PASSWORD_MAIL, // generated ethereal password
    },
    tls: {rejectUnauthorize: false,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    //from: '"Fred Foo 👻" <foo@example.com>', // sender address se le muestra al cliente
    to: obj.to, // list of receivers
    subject: obj.subject, // Subject line
    html: obj.html, // html body
  });
//aqui se asocia a un numero de operacion unico
  console.log("Message sent: %s", info.messageId);
  return info.messageId;  
  

} catch (error){
    console.log(error);
    }
  
}

module.exports = {
    main,
};