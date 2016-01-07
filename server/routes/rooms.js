import assert from 'assert';
import spark from 'ciscospark';
import express from 'express';
/* eslint new-cap: 0 */
const router = express.Router();

// assert(process.env.CISCOSPARK_ACCESS_TOKEN);

/* GET home page. */
/* eslint-disable no-unused-vars */
router.get('/', (req, res, next) => {
  (async function() {
    try {
      let rooms = await spark.rooms.list();
      res.json({
        rooms: rooms,
      });
    }
    catch(error) {
      console.error(error.stack);
      process.exit(1);
    }
  }());
});

/* create message */
/*router.post('/create', (req, res, next) => {
  //var data = req.data;
  //console.log(data);
  (async function() {
    try {
      let room = await spark.rooms.create({title:req.body.title});
      res.json({
        room: room,
      });
    }
    catch(error) {
      console.error(error.stack);
      process.exit(1);
    }
  }());
});*/

/* create message */
router.post('/', (req, res, next) => {
  //var data = req.data;
  //console.log(data);
  (async function() {
    try {
      let room = await spark.rooms.create({title:req.body.title});
      res.json({
        room: room,
      });
    }
    catch(error) {
      console.error(error.stack);
      process.exit(1);
    }
  }());
});

export default router;
