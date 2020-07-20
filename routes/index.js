var express = require('express');
var router = express.Router();
const productoService = require('./../models/producto');
const {getCategories} = require('./../models/categoria');
//const {getProducts} = require('./../models/producto')


/* GET home page. */
router.get('/',async function (req, res, next) {
  const productos = await productoService.getProducts();
  const categorias = await getCategories();
  console.log(productos);
  console.log(categorias);
  res.render('index', { title: 'Express' , 
  productos : productos,
  categorias : categorias
});
});

module.exports = router;
