/**
* Created by jiangwei on 2020/07/10 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/
const { DouyinOauth, UserManager } = require("douyin-sdk");
export class OauthService {
    static async oauth(code: string, state?: string): Promise<any> {
        const appid = process.env["CLIENT_KEY"];
        const secret = process.env["CLIENT_SECRET"];
        const dy = new DouyinOauth(appid, secret);
        const data = await dy.create_access_token({code});
        return data;
    }
}