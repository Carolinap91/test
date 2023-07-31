import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    console.log("handleSubmit", { email, clave });
    event.preventDefault();

    if (!email) {
      setError("El email es requerido");
      return;
    }

    if (!clave) {
      setError("Password es requerido");
      return;
    }

    axios
      .post(window.$api + "usuarios/login", {
        email,
        clave,
      })
      .then((response) => {
        console.log("handleSubmit", { response });
        if (response.data.status === "OK") {
          navigate("/menu");
        }

        if (response.data.status === "NO OK") {
          swal("Usuario o Password incorrectas");
        }
      });

    setEmail("");
    setClave("");
    setError("");
  };

  return (
    <div className="container py-4">
      <form className="login-form" onSubmit={handleSubmit}>
        <h5>Iniciar sesión</h5>
        <div className="mb-3">
          <input
            className="form-control"
            id="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Contraseña"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
          <Link className="linkColor" to="#">
            {" "}
            Olvidé Contraseña
          </Link>
        </div>

        {error && <div>{error}</div>}

        <div className="register-button-out">
          <button className="submit-button" type="submit">
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
