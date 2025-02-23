const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ users: ["user 1", "user 2", "user 3"] });
});

app.listen(4000, () => {
  console.log("Servidor rodando na porta 4000");
});
