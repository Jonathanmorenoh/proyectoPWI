const express = require('express');
const router = express.Router();
const { main } = require('./../utils/mail');

router.get('/',(req,res,next)=>{
    res.render('contact',{title:'Contactanos'});
});

router.post('/', async (req,res)=>{
    //informacion para completar el formulario y que viajan via POST
    //.1 capturar la informacion, hay dos maneras: 
    //const email = req.body.email;
    //const mensaje = req.body.mensaje;
    const { email, mensaje, nombre } = req.body;

    const to = process.env.ADMIN_MAIL;
    const subject = "Nuevo mensaje desde iFIT.";
    const html = "Se contactaron desde ${email} con las siguiente consulta : ${mensaje}"; 
    const resultMail = await main({
         to : to,
         subject : subject,
         html : html
        });
        console.log(resultMail);
        res.render('contact', {message : "Mensaje enviado, en breve nos contactaremos"});
    //2. luego enviar el mensaje al admin
    //3. Luego enviar un mensaje al user para confirmar su envio

})

module.exports = router;
