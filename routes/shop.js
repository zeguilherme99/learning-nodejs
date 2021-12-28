const path = require('path');
const rootDir = require('../util/path');

const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {prods: products, docTitle: 'Shop'}); // objetos que vão para dentro do pug
});

module.exports = router;