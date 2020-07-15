/**
* Created by jiangwei on 2020/07/10 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/
import { Request, Response } from "express";
import { OauthService } from "../service/oauth";
export class OauthController {
  static async oauth(req: Request, res: Response): Promise<void> {
    let query: any = req.query || {};
    console.log("controller", query);
    try {
      if (query.code) {
        const data = await OauthService.oauth(query.code);
        console.log("oauth:", data);
        res.send({
          error: 0
        });
        return;
      }
      res.send({
        error: 0
      });
    } catch (error) {
      res.send({ error: error.message })
    }
  }
}