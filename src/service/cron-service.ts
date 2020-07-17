/**
* Created by jiangwei on 2020/07/10 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/
import * as rp from "request-promise"
const { DouyinOauth, UserManager } = require("douyin-sdk");
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
        const appid = process.env["CLIENT_KEY"];
        const secret = process.env["CLIENT_SECRET"];
        const dy = new DouyinOauth(appid, secret, null, cron.openid);
        const userManager = new UserManager(dy);
        const fansList = await userManager.fansList();
        if (fansList.data && fansList.data.error_code === 0 && fansList.data.total > 0) {
          const d = new AccountDataModel({
            openid: cron.openid,
            followerCount: fansList.data.total,
            totalFavorited: 0,
            awemeCount: 0
          });
          await d.save();
        }
      }
    }
  }
}