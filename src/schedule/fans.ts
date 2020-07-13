/**
* Created by jiangwei on 2020/07/13 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/

const moment = require("moment");
const CronJob = require("cron").CronJob;
import { CronService } from "../service/cron-service";

const job = new CronJob(
    "0 */1 * * * *",
    async function () {
        const data = await CronService.find();
        for (const cron of data) {
            await CronService.exec(cron);
        }
        console.log(`调用完成cronJob定时任务：${moment().format("YYYY-MM-DD HH:mm:ss")}`);
    },
    null, true, "Asia/Shanghai"
);
job.start();
