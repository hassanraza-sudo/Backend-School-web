const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "root",
  database: "schooldb",
});

client.connect();

client.query(`SELECT * FROM users`, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(res.rows);
  client.end();
});
