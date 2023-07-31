import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Registro.css";
import bgImage from "../../imagenes/fondos/imgFondo2.jpg";
import swal from "sweetalert";
import { MapView } from "../../components/MapView/MapView";
import Switch from "react-switch";

const Registro = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [clave, setClave] = useState("");
  const [claveConfirm, setClaveConfirm] = useState("");
  const [edad, setEdad] = useState();
  const [genero, setGenero] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [switchBox, setSwitchBox] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setClave(event.target.value);
  };

  const handleRangeChange = (event) => {
    setEdad(event.target.value);
  };

  const handleSelectChange = (event) => {
    setGenero(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setCheckBox(event.target.checked);
  };

  const handleSwitchChange = (checked) => {
    setSwitchBox(checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      swal("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    if (!clave || clave.length < 8) {
      swal("Por favor, ingrese una contraseña de al menos 8 caracteres.");
      return;
    }
    if (clave !== claveConfirm) {
      swal("Contraseñas no coinciden.");
      return;
    }
    try {
      const resp = await axios.post(window.$api + "usuarios/registro", {
        nombre,
        apellido,
        email,
        telefono,
        clave,
        claveConfirm,
        edad,
        genero,
      });

      swal({
        title: "Usuario creado exitosamente",
        icon: "success",
        button: "OK",
      });

      navigate("/menu");
    } catch (err) {
      swal(err.response.data.error);
      return;
    }
  };

  return (
    <div className="container py-4">
      <img className="bg-img" src={bgImage} alt="Bg" />
      <form className="register-input" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                required
                placeholder="Nombre"
                onChange={(ev) => setNombre(ev.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Apellido"
                required
                onChange={(ev) => setApellido(ev.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="Correo"
                required
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput4"
                placeholder="Teléfono"
                required
                onChange={(ev) => setTelefono(ev.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput6"
                placeholder="Clave"
                required="Clave debe tener al menos 8 dígitos"
                value={clave}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput7"
                placeholder="Repite la Clave"
                required
                onChange={(ev) => setClaveConfirm(ev.target.value)}
              />
            </div>
          </div>
          <div className="col-6">
            <div>
              <div>
                <span>Edad: {edad}</span>
              </div>
              <input
                type="range"
                className="rangeAge"
                id="exampleFormControlInput8"
                value={edad}
                min={20}
                max={75}
                step={1}
                onChange={(ev) => setEdad(ev.target.value)}
              />
            </div>
            <div>
              <div>
                <span>Genero: {genero}</span>
              </div>
              <select
                className="genderSelect"
                value={genero}
                required
                onChange={(ev) => setGenero(ev.target.value)}
              >
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div className="mb-3">
              <MapView />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="checkBox">
            <input
              type="checkbox"
              checked={checkBox}
              required
              onChange={handleCheckboxChange}
            />
            <Link className="linkColor" to="#">
              {" "}
              Aceptar Terminos y Condiciones
            </Link>
          </div>
          <div className="switchBox">
            <Switch
              onChange={handleSwitchChange}
              checked={switchBox}
              onColor="#c3a959"
              onHandleColor="#c3a959"
              handleDiameter={15}
              uncheckedIcon={true}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
              height={10}
              width={40}
            />
            <span>
              {" "}
              Suscribirme para recibir ofertas y noticias en mi correo
            </span>
          </div>
        </div>
        <div className="row">
          <div className="register-button-out">
            <button type="submit" className="register-button">
              Crear Cuenta
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registro;
