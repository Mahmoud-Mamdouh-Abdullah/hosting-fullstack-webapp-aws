const clone = require("clone");
const config = require("./config");
const pg = require("pg");

const db = {};

const client = new pg.Pool({
  host: "database-1.crapprtfui5m.us-east-1.rds.amazonaws.com",
  user: "postgres",
  password: "postgres",
  database: "postgres",
  port: 5432,
});
const defaultData = async () => {
  try {
    const conn = await client.connect();
    const sql = "SELECT * FROM contacts";
    const result = await conn.query(sql);
    conn.release();
    return result.rows;
  } catch (err) {}
};

const get = (token) => {
  let data = db[token];

  if (data == null) {
    data = db[token] = clone(defaultData);
  }

  return data;
};

const add = (token, contact) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8);
  }

  get(token).contacts.push(contact);

  return contact;
};

const remove = (token, id) => {
  const data = get(token);
  const contact = data.contacts.find((c) => c.id === id);

  if (contact) {
    data.contacts = data.contacts.filter((c) => c !== contact);
  }

  return { contact };
};

module.exports = {
  get,
  add,
  remove,
  defaultData,
};
