const express =require('express');
const Router =express();
const bodyParser=require('body-parser');
const ToKenController=require('../Controllers/ToKen');
const Controller = new ToKenController();


Router.use(express.json());
Router.use(bodyParser.urlencoded({ extended: true }));

Router.get('/findAll', Controller.findAll);
        Router.get('/findOne/:id', Controller.findOne);
        Router.get('/findItem', Controller.findItem);

        Router.post('/create', Controller.create);
        Router.put('/update/:id', Controller.update);
        Router.delete('/delete/:id', Controller.delete);
module.exports= Router;