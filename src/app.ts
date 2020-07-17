/**
* Created by jiangwei on 2020/07/10 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/
import * as express from "express";
import * as cors from "cors";
import { OauthController } from "./controller/oauth";
import { UserController } from "./controller/user-controller";
import { CronController } from "./controller/cron-controller";
import { IndexController } from "./controller";
const bodyParser = require("body-parser");
require("./mongo");
require("./schedule/fans");
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use('/oauth', OauthController.oauth);
app.get('/users', UserController.find);
app.post('/user', UserController.create);
app.post('/cron', CronController.create);
app.get('/data', IndexController.fans);

app.listen(3008, () => {
  console.log("listen: 3008");
});