const mysql = require('mysql');//Modulo de Mysql isntalado
const util = require('util');//Modulo para que acepte Async/await
const pool = mysql.createPool({
    //crea conexiones en paralelo 
    host : process.env.HOST,
    port : process.env.PORT_DB,
    user : process.env.USER_DB,
    password : process.env.PASSWORD_DB,
    database : process.env.DATABASE,
    connectionLimit : 10
})
//pool.query ahora soporta async/await
pool.query = util.promisify(pool.query);

module.exports = pool; //exportamos pool para poder usarlo desde cualquier archivo.