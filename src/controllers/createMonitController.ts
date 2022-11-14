import { Request, Response } from "express";
import { createMonitService } from "../services/createMonitService";

export class createMonitController{
    async handle(request: Request, response: Response){
        const {mac, date, rssi, va, vb, vc, ia, ib, ic, wa, wb, wc} = request.body

        const service = new createMonitService();

        const result = await service.execute({mac, date, rssi, va, vb, vc, ia, ib, ic, wa, wb, wc});

        return response.json(result);
    }
}