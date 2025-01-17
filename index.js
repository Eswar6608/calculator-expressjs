const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 + num2;
  res.json({ result });
});
app.post("/subtract", (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 - num2;
  res.json({ result });
});
app.post("/multiply", (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 * num2;
  res.json({ result });
});
app.post("/divide", (req, res) => {
  const { num1, num2 } = req.body;
  if (num2 === 0) {
    return res.status(400).json({ error: "Division by zero is not allowed" });
  }
  const result = num1 / num2;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:5000`);
});
