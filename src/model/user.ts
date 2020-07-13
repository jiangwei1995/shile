/**
* Created by jiangwei on 2020/07/10 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/

import { Schema, Model, model, Document } from "mongoose";

export interface UserDocument extends Document {
    name: string;
    password: string;
    isAlive: boolean;
    createTime?: string;
    updateTime?: string;
}
const UserSchema: Schema = new Schema({
    name: { type: String, require: true },
    password: { type: String, required: true },
    isAlive: { type: Boolean, required: true, default: true },
    createTime: { type: Date, default: Date.now },
    updateTime: { type: Date, default: Date.now },

});
export const UserModel: Model<UserDocument> = model('User', UserSchema);
