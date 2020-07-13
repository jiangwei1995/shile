/**
* Created by jiangwei on 2020/07/10 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/
const { DouyinOauth, UserManager } = require("douyin-sdk");
import { AccountDocument, AccountModel } from "../model";

export class AccountService {
    static async create(account: AccountDocument): Promise<any> {
        return AccountModel.create(account);
    }
    static async find(): Promise<any> {
        return AccountModel.find();
    }
}