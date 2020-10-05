const express = require("express");

const PORT = 5000;
app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
});

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});
