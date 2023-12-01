//import { addUser } from "./database.js";

export function sqlSelectAll(table){
  let sql = `SELECT * FROM ${table};`
  return sql;
}
export function sqlInsert(fname, lname, phone, email, pw, streetadr, city, st, zip){
  let sql = `INSERT INTO users (fname, lname, phone, email, streetadr, city, st, zip, pw) `
  sql += `VALUES ('${fname}', '${lname}', '${phone}', '${email}', '${streetadr}', '${city}', '${st}', '${zip}', '${pw}');`
  return sql
  // sendSql(sql);
}

// function sendSql(info){
//   addUser(info)
// }