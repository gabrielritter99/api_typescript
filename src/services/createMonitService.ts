import { getRepository } from "typeorm";
import Monitoramento from "../entities/Monitoramento"

type MonitRequest={
    mac: string;
    date: Date;
    rssi: number;
    va: number;
    vb: number;
    vc: number;
    ia: number;
    ib: number;
    ic: number;
    wa: number;
    wb: number;
    wc: number;
}

export class createMonitService{

    async execute({mac, date, rssi, va, vb, vc, ia, ib, ic, wa, wb, wc}: MonitRequest): Promise<Monitoramento>{
        const repo = getRepository(Monitoramento);

        const monitoramento = repo.create({
            mac,
            date, 
            rssi, 
            va, 
            vb, 
            vc, 
            ia, 
            ib, 
            ic, 
            wa,
            wb, 
            wc
        })

        await repo.save(monitoramento);

        return monitoramento;
    }
}