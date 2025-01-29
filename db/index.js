const { Client } = require("pg");
const connectionStr = "postgresql://postgres:root@localhost:5432/schooldb";
const client = new Client({
  connectionString: connectionStr,
});

const connectDb = () => {
  client.connect((err) => {
    if (err) {
      console.error("Connection failed:", err.message);
    } else {
      console.log("Connected to the PostgreSQL database.");
    }
  });
};

module.exports = connectDb;
