const express = require('express');
const router = express.Router();
const { getCarrito, agregarItem, eliminarItem } = require('./../models/carritomodel');

router.get('/', async (req,res,next) => {
    try { 
        if(req.session.iniciado){
        const carrito = await getCarrito();
        res.render('carrito', { carrito });
        }
        else{
            res.redirect('/login')
        }
    } catch(error) {
        console.log(error);
    }
});

router.get('/baja/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const result = await eliminarItem(id);
        res.redirect('/carrito');
    } catch (error){
        console.log(error);
    }
});


module.exports = router;