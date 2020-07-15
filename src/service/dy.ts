/**
* Created by jiangwei on 2020/07/15 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/
const appid = process.env["CLIENT_KEY"];
const secret = process.env["CLIENT_SECRET"];
import { DouyinOauth, UserManager } from "douyin-sdk";
export class Dy {
  static async userInfo(open_id) {
    const dy = new DouyinOauth(appid, secret, null, open_id);
    const userManager = new UserManager(dy);
    return userManager.userinfo();
  }
}