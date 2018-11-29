// const products = []; 

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        activeAddProduct: true,
        productCSS: true,
        formsCSS: true
    });
};

exports.postAddProduct = (req, res, send) => {  
    // products.push({ title: req.body.title });
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getShopProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir ,'views', 'shop.html'));
    // console.log(adminData.products);
    // const products = adminData.products; 
    Product.fetchAll(products => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop', 
            path: '/', 
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
};