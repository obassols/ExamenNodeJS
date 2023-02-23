// In src/index.js 
const express = require("express");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({}));
app.use(express.json());

const v1ProducteRouter = require("./v1/Routes/ProducteRoutes");
app.use("/api/v1/productes", v1ProducteRouter);

const v1EstocRouter = require("./v1/Routes/EstocRoutes");
app.use("/api/v1/estocs", v1EstocRouter);

const v1MaquinaRouter = require("./v1/Routes/MaquinaRoutes");
app.use("/api/v1/maquines", v1MaquinaRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});