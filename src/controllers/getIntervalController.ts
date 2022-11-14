import { Request, Response } from "express";

import { getIntervalService } from "../services/getIntervalService";

export class getIntervalController{
    async handle(request: Request, response: Response){
        const {data_inicio, data_final, mac} = request.body;

        const service = new getIntervalService();

        const monitoramento = await service.execute({data_inicio,data_final,mac});

        return response.json(monitoramento);
    }
}