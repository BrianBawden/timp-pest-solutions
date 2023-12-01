import pkg from 'pg';
const { Client } = pkg;


class Database {
  constructor() {
    this.client = new Client({
      user: "postgres",
      host: "BrianProBook.local",
      database: "timp_pest_solutions",
      password: 'PGiheartk8',
      port: 5433
    })
  }

  async connect() {
   try{
      await this.client.connect();
      console.log(`Connected to ${this.client.database}.`)   
    } catch(err){
      console.log(err)
    }
  }

  async disconnect() {
    try{
      await this.client.end();
      console.log(`Disconnected from ${this.client.database}.`)
    } catch(err){
      console.log(err)
    }
  }

  async query(sql, params){
    try{
      const result = await this.client.query(sql, params);
      console.table(result.rows)
      return result.rows;
    } catch(err){
      console.log(err)
    }finally{
      this.disconnect()
    }
  }
}

// export function addUser(sql){
//   const log = new Database()
//   log.connect()
//   log.query(sql)
//   log.disconnect()
// }

const database = new Database()

import { sqlSelectAll, sqlInsert } from "./sql.mjs";
// import { registration } from './users.js';

// console.log(registration)
// console.log(sql);
database.connect()
// database.query(sqlInsert('kate', 'bawden', '098-765-4321', 'kate@test.com', 'fdsa', '211', 'canton', 'GA', '30114'))
database.query(sqlSelectAll('users'))

