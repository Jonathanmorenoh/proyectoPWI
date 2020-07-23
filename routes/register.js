const express = require('express');
const router = express.Router();
const {create} = require('./../models/loginmodel');

    router.get('/',async (req,res)=>{
        try {
            res.render('register',{title:'Registrate'});
        }catch (error){
            console.log(error);
        }
    });

    router.post('/', async(req,res)=>{
        try{
    const { nombre, apellido, usuario, correo, password, dni,} = req.body;
    const object = {
        nombre : nombre,
        apellido : apellido,
        usuario : usuario,
        correo : correo,
        password : password,
        dni : dni,
            };
        const result = await create(object);
        res.redirect('/login')
        }catch(error){
            console.log(error);
        }
    });
    
module.exports = router;