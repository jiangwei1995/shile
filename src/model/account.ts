/**
* Created by jiangwei on 2020/07/13 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/

import { Schema, Model, model, Document } from "mongoose";

export interface AccountDocument extends Document {
    _user: string;
    name: string;
    headImg: string;
    profileUrl: string;
    openId: string;
    followerCount: number; // 粉丝数量
    totalFavorited: number; // 点赞数量
    awemeCount: number; // 作品数量
    lastSyncTime: string; // 最后同步数据数据时间
    createTime?: string;
    updateTime?: string;
}
const AccountSchema: Schema = new Schema({
    _user: { type: Schema.Types.ObjectId, require: false, ref: 'User' },
    name: { type: String, required: true },
    headImg: { type: String, required: true },
    profileUrl: { type: String, required: false },
    openId: { type: String, required: true },
    followerCount: { type: Number, required: false },
    totalFavorited: { type: Number, required: false },
    awemeCount: { type: Number, required: false },
    lastSyncTime: { type: Date, default: Date.now },
    createTime: { type: Date, default: Date.now },
    updateTime: { type: Date, default: Date.now }
});

export const AccountModel: Model<AccountDocument> = model('Account', AccountSchema);
