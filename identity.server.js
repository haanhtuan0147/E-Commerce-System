const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv')
global.__basedir = __dirname;
dotenv.config();
const routerUser=require('./Router/User')
const routerToKen=require('./Router/ToKen')
const routerRegister_Token=require('./Router/Register_Token');
const User = require('./Model/User');
const { Route } = require('express');
class identity{
    app;
    PORT=4000;
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
        this.app.use('/User',routerUser)
    }
}
new identity();