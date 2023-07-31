import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBarMenu } from "./components/NavBarMenu/NavBarMenu";
import Inicio from "./views/Inicio/Inicio";
import Registro from "./views/Registro/Registro";
import Menu from "./views/Menu/Menu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBarMenu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
