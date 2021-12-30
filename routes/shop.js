const path = require('path');
const rootDir = require('../util/path');

const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop',{ 
        prods: products,
        path: '/',
        pageTitle: 'Shop',
        hasProducts: products.length > 0,
        activeShop: true,
        productCss: true
    }); // objetos que vão para dentro do pug ou handlebars
});

module.exports = router; // uma forma de exportar as rotas