import express from 'express';
import ConnectSpark from './connectSpark';

/* eslint new-cap: 0 */
const router = express.Router();

/* GET home page. */
/* eslint-disable no-unused-vars */
router.get('/', (req, res, next) => {
  /* eslint-enable no-unused-vars */
  res.render('index', { title: 'Express' });
});

const routes = ["rooms", "messages", "memberships", "people", "webhooks"];

routes.forEach((route) =>{
  router.all("/" + route + "*", (req, res, next) => {
    ConnectSpark(req, res);
  });
});


export default router;
