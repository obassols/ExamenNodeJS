// In src/index.js 
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({}));
app.use(express.json());

const v0_1UsuariRouter = require("./v0.1/Routes/UsuariRoutes");
app.use("/api/v0.1/usuaris", v0_1UsuariRouter);

const v0_1TascaRouter = require("./v0.1/Routes/TascaRoutes");
app.use("/api/v0.1/tasques", v0_1TascaRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});