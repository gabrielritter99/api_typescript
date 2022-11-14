import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createMonit1668369086086 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'monitoramento',
            columns:[
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'mac',
                    type: 'macaddr'
                },
                {
                    name: 'date',
                    type: 'timestamp'                    
                },
                {
                    name: 'rssi',
                    type: 'integer'
                },
                {
                    name: 'va',
                    type: 'float'
                },
                {
                    name: 'vb',
                    type: 'float'
                },
                {
                    name: 'vc',
                    type: 'float'
                },
                {
                    name: 'ia',
                    type: 'float'
                },
                {
                    name: 'ib',
                    type: 'float'
                },
                {
                    name: 'ic',
                    type: 'float'
                },
                {
                    name: 'wa',
                    type: 'float'
                },
                {
                    name: 'wb',
                    type: 'float'
                },
                {
                    name: 'wc',
                    type: 'float'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('monitoramento')
    }

}
