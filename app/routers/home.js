import * as express {Router} from 'express';

Router.get("/",HomeController.Home);
App.use(Router);
