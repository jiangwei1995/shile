/**
* Created by jiangwei on 2020/07/13 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/

import { Schema, Model, model, Document } from "mongoose";

export interface AccountDataDocument extends Document {
    openid: string;
    followerCount: number; // 粉丝数量
    totalFavorited: number; // 点赞数量
    awemeCount: number; // 作品数量
    lastSyncTime: string; // 最后同步数据数据时间
}
const AccountDataSchema: Schema = new Schema({
    openid: { type: String, required: true },
    followerCount: { type: Number, required: false },
    totalFavorited: { type: Number, required: false },
    awemeCount: { type: Number, required: false },
    lastSyncTime: { type: Date, default: Date.now }
});

export const AccountDataModel: Model<AccountDataDocument> = model('AccountData', AccountDataSchema);
