const mongoose = require("mongoose");

const UsuariosSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es requerido"],
      minlength: [3, "Debe tener un mínimo de 3 caracateres"],
    },
    apellido: {
      type: String,
      required: [true, "El apellido es requerido"],
      minlength: [3, "Debe tener un mínimo de 3 caracateres"],
    },
    email: {
      type: String,
      required: [true, "El email es requerido"],
      unique: true,
    },
    telefono: {
      type: Number,
    },
    clave: {
      type: String,
      required: [true, "La clave es requerida"],
      minlength: [8, "Debe tener un mínimo de 8 caracateres"],
    },
    claveConfirm: {
      type: String,
      required: [true, "La confirmacion de clave es requerida"],
    },
    edad: {
      type: Number,
    },
    genero: {
      type: String,
    },
  },
  { timestamps: true }
);

const Usuarios = mongoose.model("usuarios", UsuariosSchema);
module.exports = Usuarios;
