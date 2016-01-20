import express from 'express';
import ConnectSpark from './connectSpark';

const router = express.Router();

const routes = ["rooms", "messages", "memberships", "people", "webhooks"];

routes.forEach((route) =>{
  // console.log("route:" , route);
  router.all("/" + route + "*", (req, res, next) => {
    ConnectSpark(req, res);
  });
});


export default router;
