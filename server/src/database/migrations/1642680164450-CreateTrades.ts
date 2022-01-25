import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTrades1642680164450 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'trades',
				columns: [
					{
						name: 'id',
						type: 'uuid',
					},
					{
						name: 'baseCurrency',
						type: 'varchar',
					},
					{
						name: 'exchangeCurrency',
						type: 'varchar',
					},
					{
						name: 'moneyAmount',
						type: 'numeric',
					},
					{
						name: 'currentCurrencyValue',
						type: 'numeric',
					},
					{
						name: 'exchangeAmount',
						type: 'numeric',
					},
					{
						name: 'date',
						type: 'timestamp',
						default: 'now()',
					},
				]
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('trades');
	}

}
