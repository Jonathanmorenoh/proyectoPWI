const express = require('express');
const router = express.Router();
const serviceProducts = require('./../models/producto');
const producto = require('./../models/producto');
const { getCarrito, agregarItem, eliminarItem } = require('./../models/carritomodel');
//producto individual

    router.get('/:id', async (req, res, next)=>{
    const id = req.params.id; //obetenemos el id que llega mediante el url
    const producto = await serviceProducts.getProduct(id);
    res.render('producto',{title : 'Producto', 
    producto : producto,
    precio_previo : producto.precio * 1.2
});
    });

router.post('/:id', async(req, res)=>{
    const id = req.params.id;
    const producto = await serviceProducts.getProduct(id);
    const {cantidad} = req.body;
    const precioFinal = producto.precio*cantidad;
    const object = {
        precio : precioFinal,
        cantidad : cantidad,
        nombre_producto : producto.nombre,
        imagen_producto : producto.imagen,
    };
    const result = await agregarItem(object);
    res.redirect('/carrito');
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