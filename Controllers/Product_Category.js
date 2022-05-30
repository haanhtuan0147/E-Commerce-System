const {v4} = require('uuid');
const BaseController =require('./BaseController');
const baseController = new BaseController();
const Service=require('../Service/Product_Category')
const service = new Service();
module.exports=class Product_Category {

    findAll = (req, res, next) => {

        service.findAll()
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });
}

     create =  (req, res, next) => {
        const item = req.body;
        item.Id = v4();
        service.create(item)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });
    }

     update =  (req, res, next) => {
        const item = req.body;
        const id = req.params.id;
        service.update(id, item)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });
    }

    findOne =  (req, res, next) => {
        const id = req.params.id;
        service.findOne(id)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });
    }
    findItem =  (req, res, next) => {
        const item = req.body;
        service.findItem(item)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });

    }
    checkArrayCategory=  (req, res, next) => {
        const item = req.body.category;
        service.checkArrayCategory(item)
        .then(result => {
            baseController.sendResponse(result, req, res.status(200));
        })
        .catch(err => { baseController.sendResponse(err, req, res.status(500)); });

    }
    delete = (req, res, next) => {
        const id = req.params.id;
        service.delete(id)
            .then(result => {
                baseController.sendResponse(result, req, res.status(200));
            })
            .catch(err => { baseController.sendResponse(err, req, res.status(500)); });

    }
}