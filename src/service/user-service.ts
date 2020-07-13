/**
* Created by jiangwei on 2020/07/10 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/
const { DouyinOauth, UserManager } = require("douyin-sdk");
import * as mongoose from "mongoose";
import { UserDocument, UserModel } from "../model";

export class UserService {
    static async create(user: UserDocument): Promise<any> {
        return UserModel.create(user);
    }
    static async find(): Promise<any> {
        return UserModel.find();
    }
}