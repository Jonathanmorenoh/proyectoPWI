const express = require('express');
const router = express.Router();
const serviceProducts = require('./../models/producto');
const producto = require('./../models/producto');

//producto individual

    router.get('/:id', async (req, res, next)=>{
    const id = req.params.id; //obetenemos el id que llega mediante el url
    const producto = await serviceProducts.getProduct(id);
    res.render('producto',{title : 'Producto', 
    producto : producto,
    precio_previo : producto.precio * 1.2
});
    });

    //productos totales

    router.get('/', async (req,res,next)=>{
        const productos = await serviceProducts.getProducts();
        console.log(productos);
        res.render('productos',{title:'Nuestros productos',
    productos : productos
});
    });
module.exports = router;