import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedCustomers1700000000002 implements MigrationInterface {
  name = 'SeedCustomers1700000000002'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO "customer" (name, email, phone, city, state) VALUES
      ('Alice Johnson', 'alice@example.com', '1234567890', 'Pune', 'MH'),
      ('Bob Smith', 'bob@example.com', '9876543210', 'Mumbai', 'MH'),
      ('Carol Davis', 'carol@example.com', NULL, 'Bengaluru', 'KA')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "customer" WHERE email IN ('alice@example.com','bob@example.com','carol@example.com')`);
  }
}
