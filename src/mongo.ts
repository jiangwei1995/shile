/**
* Created by jiangwei on 2020/07/13 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/

import * as mongoose from "mongoose";

mongoose.connect(
    "mongodb://root:test@127.0.0.1:4717/admin",
    { useNewUrlParser: true, dbName:"dy" }
).catch(err => {
    console.log(err);
    process.exit(1);
});