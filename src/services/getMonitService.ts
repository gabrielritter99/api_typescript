import { getRepository } from "typeorm";
import Monitoramento from "../entities/Monitoramento";


export class getMonitService{
    async execute(){
        const repo = getRepository(Monitoramento);
        
        const monitoramento = await repo.find();

        return monitoramento;
    }
}