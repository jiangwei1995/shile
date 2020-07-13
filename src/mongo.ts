/**
* Created by jiangwei on 2020/07/13 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/

const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://127.0.0.1:3717/dy",
    { useNewUrlParser: true }
).catch(err => {
    console.log(err);
    process.exit(1);
});