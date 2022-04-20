import express from 'express';
import * as IndexModel from './app/models/index.js';
import * as IndexController from './app/controllers/index.js';
import * as IndexRouter from './app/routers/index.js';
import * as Path from 'path';

global.App = express();

App.set("view engine","ejs");
App.set('views',Path(__dirname+"/views"));
App.use(express.static(Path(__dirname+"/public")));
App.use(express.json());
App.use(express.urlencoded({extended: true}));

App.listen(3000,()=>{
    console.log("Server Runned on Port 3000");
});