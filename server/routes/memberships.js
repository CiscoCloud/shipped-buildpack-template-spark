import assert from 'assert';
import spark from 'ciscospark';
import express from 'express';
/* eslint new-cap: 0 */
const router = express.Router();


/* GET home page. */
/* eslint-disable no-unused-vars */
router.get('/', (req, res, next) => {
  (async function() {
    try {
      let memberships = await spark.memberships.list({personEmail: `vj.scjp@gmail.com`})
      res.json({
        memberships: memberships,
      });
    }
    catch(error) {
      console.error(error.stack);
      process.exit(1);
    }
  }());
});

export default router;
