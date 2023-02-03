import { createConnection } from 'typeorm';
import 'reflect-metadata';
import { User } from './entity/User';
export const connection = createConnection({
  type: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // default port of postgres
  username: process.env.DB_USERNAME, // our created username, you can have your own user name
  password: process.env.DB_PASSWORD, // our created username, you can have your own password
  database: process.env.DB_DATABASE, // our created database name, you can have your own
  entities: [
    // typeORM will not be able to create database table if we forget to put entity class name here..
    User, // our User entity class
  ],
});
