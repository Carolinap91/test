const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Usuarios = require("./models/usuarios.models");

mongoose
  .connect("mongodb://0.0.0.0:27017/agrosat", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Se conectó correctamente a la bd"))
  .catch((err) => {
    console.log("Hubo un error al conectarse a la bd");
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use(cors());

require("./routes/usuarios.routes")(app);

const LoginRoutes = require("./routes/usuarios.routes");
LoginRoutes(app);

const server = app.listen(8000, () => {
  console.log("Listening at Port 8000");
});
