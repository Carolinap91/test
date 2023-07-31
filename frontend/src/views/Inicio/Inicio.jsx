import "./Inicio.css";
import bgImage from "../../imagenes/fondos/imgFondo1.jpg";
import { Login } from "../../components/Login/Login";

const Inicio = () => {
  return (
    <div>
      <img className="bg-img" src={bgImage} alt="Bg" />
      <div className="row">
        <div className="text-center">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
