/**
* Created by jiangwei on 2020/07/10 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/
import { Request, Response } from "express";
import { CronService } from "../service/cron-service";
export class CronController {
    static async find(req: Request, res: Response): Promise<void> {
        let query: any = req.query || {};
        console.log("controller", query);
        const data = await CronService.find();
        res.send({ error: 0, data: data });
    }

    static async create(req: Request, res: Response): Promise<void> {
        let body: any = req.body || {};
        const data = await CronService.create(body);
        res.send({ error: 0, data: data });
    }
}