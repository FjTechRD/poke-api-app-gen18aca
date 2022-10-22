import { Route, Routes } from "react-router-dom";
import "./style/App.css";
import Home from "./pages/Home";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Pokedex from "./pages/Pokedex";
import PokemonById from "./pages/PokemonById";
import Footer from "./shared/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokemonById />} />
        </Route>
      </Routes>
      <div className="separator"></div>
    </div>
  );
}

export default App;
