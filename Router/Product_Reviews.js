const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const Product_ReviewsController=require('../Controllers/Product_Reviews');
const Controller = new Product_ReviewsController();


Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

Router.get('/findAll', Controller.findAll);
        Router.get('/findOne/:id', Controller.findOne);
        Router.get('/findItem', Controller.findItem);

        Router.post('/create', Controller.create);
        Router.put('/update/:id', Controller.update);
        Router.delete('/delete/:id', Controller.delete);
module.exports= Router;