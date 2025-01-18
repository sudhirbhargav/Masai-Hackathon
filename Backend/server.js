const express = require("express");
const app = express();
const process = require("node:process");
const cors = require("cors");
const authRoutes = require("./src/routes/userRoutes/authRoutes");
const category = require("./src/routes/categoriesRoutes/index");
const Product = require("./src/routes/productRoutes/index");

const connectDatabase = require("./db");

connectDatabase();

const PORT = process.env.port || 6000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api", category);
app.use("/api", Product);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
