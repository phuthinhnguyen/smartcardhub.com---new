var mysql = require("mysql2/promise")

// create the connection to database
console.log("Creating connection pool...")

const pool = mysql.createPool({
    host: '151.106.124.188',
    user: 'u670685794_phuthinhnguyen',
    database: 'u670685794_smartcard',
    password: 'Mainhi1407'
   
})

module.exports={pool}