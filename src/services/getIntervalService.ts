import { getRepository, Timestamp, Raw } from "typeorm";
import Monitoramento from "../entities/Monitoramento";

type IntervalRequest= {
    data_inicio: Timestamp;
    data_final: Timestamp;
    mac: string;
}

export class getIntervalService{
    async execute ({data_inicio, data_final, mac}:IntervalRequest){
        const repo = getRepository(Monitoramento);
        
        const interval = await repo.find({
            date: Raw((alias) => `${alias} >= :data_inicio and ${alias} <= :data_final`, { data_inicio: data_inicio, data_final:data_final }),
            mac: mac         
        });

        return interval;                     
    }
}