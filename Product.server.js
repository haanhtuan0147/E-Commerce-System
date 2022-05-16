const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv')
dotenv.config();
global.__basedir = __dirname;
class Product{
    app;
    PORT=4002;
    constructor(){
        this.app=express();
        this.conFig();
        this.start();
        this.router();
    }
    conFig() {
        this.app.use(express.json())
             //.use(cors(corsOptions))
            .use(
                session({
                    secret: "keyboard cat",
                    resave: false,
                    saveUninitialized: true,
                    cookie: { secure: false }
                })
            )
            .use(passport.initialize())
            .use(passport.session())
            .use(bodyParser.urlencoded({extended:true}))
            .use(bodyParser.json())

    }
    start(){
        this.app.listen(this.PORT, () => {
            console.log(`server running at port: ${this.PORT}`);
        });
    }
    router(){
    }
}
new Product();