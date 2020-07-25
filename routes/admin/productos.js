const express = require("express");
const router = express.Router();
const { getProducts, create, update }= require('./../../models/producto');
const { getCategories } = require('./../../models/categoria');
const imgHandler = require('./../../utils/imageHandler');
const multer = require('multer');
const config = { dest : './public/tmp' };//multer crea esta carpeta
const upload = multer(config);// configure multer para que envie a config

//rutas de mas nivel van arriba

//productos baja
router.get('/baja/:id', async (req, res) => {
    if(req.session.administrador){
    try {
        const {id} = req.params;
        const result = await update(id,{estado: false});
        res.redirect('/admin/productos');
    } catch (error){

    }}
    else{
        res.send('No tenes permisos para ingresar')
    }
});

//admin/productos/alta
router.get('/alta', async (req,res) => {
    if(req.session.administrador){
        try{
    const categorias = await getCategories();
    res.render('altaproducto', {categorias});
        }catch(error){

        }}
        else{
            res.send('No tenes permisos para ingresar')
        }
});
//.array multiples archivos
//.single un solo archivo
router.post('/alta', upload.single('imagen'), async (req, res) => {
    try {
    const { nombre, descripcion, id_categoria, precio, descuento} = req.body;
    const img = imgHandler.saveImage(req.file);
    const object = {
        nombre : nombre,
        descripcion : descripcion,
        id_categoria : parseInt(id_categoria),
        precio : precio,
        descuento : descuento,
        imagen : img,
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
   if(req.session.administrador){
    try{
        const productos = await getProducts();
       console.log(productos);
       res.render('adminproductos', {productos});
   } catch(error) {
   }}
   else{
       res.send('No tenes permisos para ingresar')
   }
});

module.exports = router;