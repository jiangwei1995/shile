/**
* Created by jiangwei on 2020/07/13 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/

import { Schema, Model, model, Document } from "mongoose";

export interface CronDocument extends Document {
    openid: string;
    profileUrl: string;
    type: string;
    isAlive: boolean;
}
const CronSchema: Schema = new Schema({
    openid: { type: String, require: true },
    profileUrl: { type: String, required: true },
    type: { type: String, required: true },
    isAlive: { type: Boolean, default: true }
});

export const CronModel: Model<CronDocument> = model('Cron', CronSchema);
