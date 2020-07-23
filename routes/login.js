const express = require('express');
const router = express.Router();
const session = require('express-session');
const {logueado} = require('./../models/loginmodel');

router.get('/', async (req,res,next) => {
    try { 
        res.render('login', {title: 'Ingresa en tu cuenta'});
    } catch(error) {
        console.log(error);
    }
});

//obetenemos las credenciales del usuario via body

router.post('/', async (req, res, next)=>{
    const usuario = req.body.usuario;
    const pass = req.body.pass;
    const resultado = await logueado(usuario, pass);
    if(resultado.length == 1){
        console.log('Logueado');
        if(resultado[0].admin == 1){
            req.session.administrador = true;
            res.redirect('/admin/productos');
        }
        else{
            req.session.administrador = false;
            res.redirect('/');
        }
        //else{
            //console.log('Usuario o contraseña incorrecta');
        //}
    }
});

module.exports = router;