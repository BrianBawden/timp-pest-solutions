

export function sqlSelectAll(table){
  let sql = `SELECT * FROM ${table};`
  return sql;
}
export function sqlInsert(fname, lname, phone, email, pw, streetadr, city, st, zip){
  let sql = `INSERT INTO users (fname, lname, phone, email, pw, streetadr, city, st, zip)"
  sql += "VALUES (${fname}, ${lname}, ${phone}, ${email}, ${pw}, ${streetadr}, ${city}, ${st}, ${zip});`
  return sql;
}
