require("dotenv").config();
const Mysql = require("mysql");
let MysqlInstance;

const Setup = () =>
{
  MysqlInstance = Mysql.createConnection({
      host     : process.env["DB_HOST"],
      user     : process.env["DB_USER"],
      password : process.env["DB_PASSWORD"],
      database : process.env["DB_DATABASE"]
  });
}

const GetDB = () =>
{
    return MysqlInstance;
}

module.exports = {
    Setup,
    GetDB
}
