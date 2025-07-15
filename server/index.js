// server/index.js
const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;


const db = new Pool({ connectionString: process.env.DATABASE_URL });

app.get('/', async (req, res) => {
  const result = await db.query('SELECT NOW()');
  res.send(`Hello from backend! Time: ${result.rows[0].now}`);
});

app.listen(port, () => console.log(`Server running on port ${port}`));