import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.CS_DB_HOST || 'localhost',
  port: parseInt(process.env.CS_DB_PORT || '5432', 10),
  username: process.env.CS_DB_USER || 'postgres',
  password: process.env.CS_DB_PASS || 'Manas',
  database: process.env.CS_DB_NAME || 'customer_db',
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
});

export default dataSource;
