/**
* Created by jiangwei on 2020/07/10 .
* Copyright (c) 2020 (jw872505975@gmail.com). All rights reserved.
*/
import { Request, Response } from "express";
import { UserService } from "../service/user-service";
export class UserController {
    static async find(req: Request, res: Response): Promise<void> {
        let query: any = req.query || {};
        console.log("controller", query);
        const data = await UserService.find();
        res.send({ error: 0, data: data });
    }

    static async create(req: Request, res: Response): Promise<void> {
        let body: any = req.body || {};
        const data = await UserService.create(body);
        res.send({ error: 0, data: data });
    }
}