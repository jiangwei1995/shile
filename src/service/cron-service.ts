/**
* Created by jiangwei on 2020/07/10 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/
import * as rp from "request-promise"
import { CronDocument, CronModel, AccountDataModel } from "../model";

export class CronService {
    static async create(cron: CronDocument): Promise<any> {
        return CronModel.create(cron);
    }
    static async find(): Promise<any> {
        return CronModel.find();
    }
    static async exec(cron: CronDocument): Promise<void> {
        if (cron.isAlive) {
            if (cron.type === "fans") {
                const res = await rp({
                    url: cron.profileUrl,
                    resolveWithFullResponse: true
                });
                const qs = require("qs");
                var obj = qs.parse(res.request.uri.query);
                const data = await rp({
                    url: `https://www.iesdouyin.com/web/api/v2/user/info/?sec_uid=${obj.sec_uid}`, json: true
                })
                const d = new AccountDataModel({
                    openid: cron.openid,
                    followerCount: Number(data.user_info.follower_count),
                    totalFavorited: Number(data.user_info.total_favorited),
                    awemeCount: Number(data.user_info.aweme_count)
                });
                await d.save();
                console.log(`账号名称: ${data.user_info.nickname}`);
                console.log(`点赞数量:${Number()}`);
                console.log(`粉丝数量:${data.user_info.follower_count}`);
                console.log(`作品数量:${data.user_info.aweme_count}`);
            }
        }

    }
}