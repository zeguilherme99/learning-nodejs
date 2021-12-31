const Product = require('../models/product')

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list',{ 
            prods: products,
            path: '/products',
            pageTitle: 'Shop'
        });// objetos que vão para dentro do ejs
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index',{ 
            prods: products,
            path: '/',
            pageTitle: 'Index'
        });// objetos que vão para dentro do ejs
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTittle: 'Checkout'
    })
}