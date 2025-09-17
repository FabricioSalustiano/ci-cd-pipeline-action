import express from "express";

// Teste de alteração

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello CI/CD World");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
