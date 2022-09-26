const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

async function  sqliteConection() {
  const database = await sqlite.open({
    filename: ""
  }) 
}