const pool = require("../../util/database");
const path = require("path");

const p = path.join(__dirname, "initialize.sql");

// const pg = require('pg')
// const ClientClass = pg.Client
// const pgUrl = "postgres://ntzpalcg:1OMZq1vH_90_6b6INK3UFjdmRBbUMAx1@ziggy.db.elephantsql.com/ntzpalcg"    //ElephantSQL url goes here.
// const client = new ClientClass(pgUrl)

const fs = require("fs");

//Initialize / Reset Tables
async function initialize_tables() {
  const client = await pool.connect();
  const initialize_query = fs.readFileSync(p).toString();
  await client.query(initialize_query);
  client.release();

  console.log("Table reinitialized!");
}

async function show_tables() {
  const client = await pool.connect();

  result = await client.query(`SELECT * FROM UserCredentials;`);
  console.log(result.rows);

  result = await client.query(`SELECT * FROM ClientInformation;`);
  console.log(result.rows);

  result = await client.query(`SELECT * FROM FuelQuote;`);
  console.log(result.rows);

  client.release();
}

/*
async function for_testing(username, password){
    result = await client.query(`SELECT * FROM UserCredentials WHERE username = '${username}' AND pass = '${password}'`);
    console.log(result.rows[0].pass)
}
*/

async function main() {
  await initialize_tables();
  await show_tables();
  //await for_testing('mooncoast_services', 'c64d0c34f1aab92d579ebe3de95859fa:fb001eb775cfa3ddeba361c038b468dbbfbc718e44a6ebec82d152fbdbe58948');
  console.log("Reinitialization complete!");
}

main();

module.exports = { main, initialize_tables };

// node initialize.js
