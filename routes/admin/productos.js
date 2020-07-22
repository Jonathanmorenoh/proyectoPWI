const express = require("express");
const router = express.Router();
const { getProducts, create }= require('./../../models/producto');
const { getCategories } = require('./../../models/categoria');
//rutas de mas nivel van arriba

//admin/productos/alta
router.get('/alta', async (req,res) => {
    const categorias = await getCategories();
    res.render('altaproducto', {categorias});
});

router.post('/alta', async (req, res) => {
    try {
    const { nombre, descripcion, id_categoria, precio, descuento} = req.body;
    const object = {
        nombre : nombre,
        descripcion : descripcion,
        id_categoria : parseInt(id_categoria),
        precio : precio,
        descuento : descuento,
    };
    const result = await create(object);
    console.log(`El insert id retornado es : ${result}`);
    res.render('altaproducto', {message: "Producto dado de alta"});
}catch(error) {
    console.log(error);
}
});

//cargar todos los productos de la pagina
router.get('/',async function (req, res, next) {
   try{
     const productos = await getProducts();
    console.log(productos);
    res.render('adminproductos', {productos});
} catch(error) {
}
});

module.exports = router;