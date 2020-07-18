const express = require('express');
const router = express.Router();

    router.get('/',(req,res,next)=>{
        res.render('shop',{title:'Nuestros productos'});
    });
module.exports = router;