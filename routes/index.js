var express = require('express');
var router = express.Router();
const productoService = require('./../models/producto');
//const {getProducts} = require('./../models/producto')


/* GET home page. */
router.get('/',async function (req, res, next) {
  const productos = await productoService.getProducts();
  console.log(productos);
  res.render('index', { title: 'Express' , productos : productos});
});

module.exports = router;
