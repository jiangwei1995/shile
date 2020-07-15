/**
* Created by jiangwei on 2020/07/15 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/
import * as moment from "moment";
import { AccountDataService } from "../service/account-data-service";

export class IndexController {
  static async fans(req, res) {
    const query: any = req.query || {};
    let data = await AccountDataService.find({ openid: query.openid });
    data = data.reduce((prev, curr) => {
      prev.push({
        "粉丝总数量": curr.followerCount,
        "点赞总数量": curr.totalFavorited,
        "作品总数量": curr.awemeCount,
        "记录时间": moment(curr.lastSyncTime).format("YYYY-MM-DD HH:mm:ss"),
      });
      return prev;
    }, [])
    res.send({ error: 0, data })
  }
}