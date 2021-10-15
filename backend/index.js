const express = require("express");
const app = express();
const port = 5000;

const connectToMongo = require("./database");
connectToMongo();

// mediator
app.use(express.json());
// available routes
app.use("/api/posts", require("./routes/posts"));
app.use("/api/categories", require("./routes/categories"));
app.use("/api/auth", require("./routes/auth"));

app.listen(port, () => {
  console.log(`Aditi's Blog Backend is listening at http://localhost:${port}`);
});
