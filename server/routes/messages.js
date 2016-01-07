import assert from 'assert';
import spark from 'ciscospark';
import express from 'express';
/* eslint new-cap: 0 */
const router = express.Router();

// assert(process.env.CISCOSPARK_ACCESS_TOKEN);

/* GET home page. */
/* eslint-disable no-unused-vars */
/*router.get('/:id', (req, res, next) => {
  console.log(req.params.id);
  (async function() {
    try {
      let room = await spark.rooms.create({title:'Messages Example2'})
      console.log(room.id)
      let message = await spark.messages.create({
        text: 'The Spark webapps favicon',
        file: 'https://web.ciscospark.com/favicon.ico',
        roomId: room.id
      });
      let messages = await spark.messages.list({roomId: room.id});
      res.json({
        messages: messages,
      });
    }
    catch(error) {
      console.error(error.stack);
      process.exit(1);
    }
  }());
});*/
router.post('/', (req, res, next) => {
  //console.log(req.body.roomId);
  (async function() {
    try {
      let messages = await spark.messages.list({roomId: req.body.roomId});
      res.json({
        messages: messages,
      });
    }
    catch(error) {
      console.error(error.stack);
      process.exit(1);
    }
  }());
});

export default router;
