import { Request, Response } from "express";
import { getMonitService } from "../services/getMonitService";

export class getMonitController{
    async handle(request: Request, response: Response){
        const service = new getMonitService();

        const monitoramento = await service.execute();

        return response.json(monitoramento);
    }
}