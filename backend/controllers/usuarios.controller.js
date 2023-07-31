const UsuariosModel = require("../models/usuarios.models");
const bcrypt = require("bcrypt");

module.exports.registroUsuario = async function (request, response) {
  const requestData = request.body;

  if (request.body.clave != request.body.claveConfirm) {
    return response.json({ error: "la contraseña no coincide" }, 401);
  }
  try {
    const claveEncriptada = await bcrypt.hash(request.body.clave, 10);
    const claveConfirmEncriptada = await bcrypt.hash(request.body.clave, 10);
    const newUser = await UsuariosModel.create({
      ...requestData,
      clave: claveEncriptada,
      claveConfirm: claveConfirmEncriptada,
    });
    return response.json({ _id: newUser._id });
  } catch (error) {
    console.log(error);
    if (error.code == 11000) {
      return response.json({ error: "Este email ya está registrado" }, 401);
    }
    response.json(error, 400);
  }
};

module.exports.loginUsuario = async (request, response) => {
  let usuarioEncontrado = await UsuariosModel.findOne({
    email: request.body.email,
  });
  console.log(usuarioEncontrado);
  if (!usuarioEncontrado) {
    response.json({
      status: "NO OK",
    });
  } else {
    response.json({
      status: "OK",
    });
  }
};
