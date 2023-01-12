const express = require('express');
const Router=express.Router();
const {getAllProducts,getAllProductsTesting}=require("../controllers/product.js")

Router.route('/').get(getAllProducts);
Router.route('/testing').get(getAllProductsTesting);

module.exports = Router;