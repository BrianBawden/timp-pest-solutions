
const { Client } = require('pg')

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
      this.disconnect()
    } catch(err){
      console.log(err)
    }
  }

}

const database = new Database()

module.exports = database;

database.connect()
database.query('SELECT * FROM test;')