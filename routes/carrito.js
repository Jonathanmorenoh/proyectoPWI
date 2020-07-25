const express = require('express');
const router = express.Router();

router.get('/', async (req,res,next) => {
    try { 
        res.render('carrito', {title: 'Tu carrito de compras🛒'});
    } catch(error) {
        console.log(error);
    }
});

module.exports = router;