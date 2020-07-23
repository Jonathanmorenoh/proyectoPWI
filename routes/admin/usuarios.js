const express = require("express");
const router = express.Router();
const session = require('express-session');
const { getUsuarios , deletebyID , modifyAdm } = require('./../../models/loginmodel');

router.get('/',async function (req, res) {
    if(req.session.administrador){
     try{
         const usuarios = await getUsuarios();
        console.log(usuarios);
        res.render('adminusers', {usuarios});
    } catch(error) {
    }}
    else{
        res.send('No tenes permisos para ingresar')
    }
});

router.get('/baja/:id', async (req, res) => {
    if(req.session.administrador){
    try {
        const {id} = req.params;
        const result = await deletebyID(id,{estado: false});
        res.redirect('/admin/usuarios');
    } catch (error){

    }}
    else{
        res.send('No tenes permisos para ingresar')
    }
});

router.get('/modificar/:id', async(req,res)=>{
    if(req.session.administrador){
    try{
        const { id } = req.params;
        const result = await modifyAdm(id);
        res.redirect("/admin/usuarios");
    } catch(error) {
        console.log(error);
    }}else{
        res.send("No tenes permisos para ingresar")
    }
});
module.exports = router;