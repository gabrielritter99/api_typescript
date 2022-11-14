import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity("monitoramento")
export class Monitoramento{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("macaddr")
    mac: string;

    @Column("timestamp without time zone")
    date: Timestamp;

    @Column("int4")
    rssi: number;

    @Column("float8")
    va: number;

    @Column("float8")
    vb: number;

    @Column("float8")
    vc: number;

    @Column("float8")
    ia: number;

    @Column("float8")
    ib: number;

    @Column("float8")
    ic: number;

    @Column("float8")
    wa: number;

    @Column("float8")
    wb: number;

    @Column("float8")
    wc: number;
}

export default Monitoramento;