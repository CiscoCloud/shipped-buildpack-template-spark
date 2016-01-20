'use strict';

import assert from 'assert';
import AuthInterceptor from 'ciscospark/dist/interceptors/auth';
import _ from 'lodash';
import {
  default as CiscoSpark, registerPlugin
}
from '@ciscospark/spark-core';

import Memberships from 'ciscospark/dist/plugins/memberships';
import Messages from 'ciscospark/dist/plugins/messages';
import People from 'ciscospark/dist/plugins/people';
import Rooms from 'ciscospark/dist/plugins/rooms';
import Webhooks from 'ciscospark/dist/plugins/webhooks';


registerPlugin(`memberships`, Memberships, {
  interceptors: {
    // TODO should be able to register interceptors separately from plugins.
    AuthInterceptor: AuthInterceptor.create
  }
});
registerPlugin(`messages`, Messages);
registerPlugin(`people`, People);
registerPlugin(`rooms`, Rooms);
registerPlugin(`webhooks`, Webhooks);

// const methods = {
//   get: "GET",
//   list: "GET",
//   create: "POST",
//   update: "PUT",
//   remove: "DELETE"
// };

const preQueries = {
  "messages_list": "rooms_get::roomId_id"
};

function getPreQueryParams(req, route, method) {
  let p = preQueries[route + "_" + method],
    ret;
  if (p) {
    let sp = p.split("::");
    let paramsMapping = sp[1].split("_");

    let param = paramsMapping[0];
    //find param value in query & then in body
    let paramValue = req.query[param] || req.body[param];
    let o = {};
    if (param && paramValue) {
      o[paramsMapping[1]] = paramValue;
    }

    ret = sp[0].split("_");
    ret.push(o);
  }
  return ret;
}

var  config = {
  hydraServiceUrl: process.env.HYDRA_SERVICE_URL || `https://api.ciscospark.com/hydra/api/v1`,
  credentials: {
    clientType: `confidential`
  }
};

function ConnectSpark(req, res) {
  console.log(req.url);
  let paths = req.url.split("/");
  console.log(paths);
  console.log(req.method);
  console.log(req.query);
  // assert(process.env.CISCOSPARK_ACCESS_TOKEN);

  if (paths.length > 2) {
    var tok = req.cookies.token;
    console.log("token: " + tok);

    (async function() {
      try {
        let sparkIns = new CiscoSpark({
          credentials: {
            authorization: {
              access_token: tok
            }
          },
          config: config
        });
        let route = paths[1],
          method = paths[2].split("?")[0];

        let response = {};

        //check pre query
        let preQuery = getPreQueryParams(req, route, method);
        if (preQuery) {
          var r = await sparkIns[preQuery[0]][preQuery[1]](preQuery[2]);
          response[preQuery[0] + "_" + preQuery[1]] = r;
        }

        let p = req.method === "GET" ? req.query : req.body;

        let result = await sparkIns[route][method](p);

        res.json(_.merge(response, result));

      } catch (error) {
        console.log(error);
        // process.exit(1);
        res.status(error.message === "not authenticated" ? 401 : 500);
        res.json({
          message: error.message,
          stack: error.stack
        });
      }
    }());
  } else {
    res.json("Error: invalid parameters...");
  }
}

export default ConnectSpark;
