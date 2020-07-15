/**
* Created by jiangwei on 2020/07/10 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/
import { AccountDataModel } from "../model";

export class AccountDataService {
  static async find(query, limit = 500): Promise<any> {
    return AccountDataModel.find(query).limit(limit).sort({lastSyncTime: -1});
  }
}