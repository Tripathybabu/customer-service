import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCustomerTable1700000000001 implements MigrationInterface {
  name = 'CreateCustomerTable1700000000001'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS "customer" (
      "id" SERIAL PRIMARY KEY,
      "name" varchar NOT NULL,
      "email" varchar NOT NULL UNIQUE,
      "phone" varchar NULL,
      "address" varchar NULL,
      "city" varchar NULL,
      "state" varchar NULL,
      "postalCode" varchar NULL
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF EXISTS "customer"');
  }
}
