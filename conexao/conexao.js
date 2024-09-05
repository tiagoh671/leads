import mysql from 'mysql2/promise'

let pool

pool = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'1324',
  database:'leads_db'
})


export default pool