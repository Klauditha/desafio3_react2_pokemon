import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Details from "../../pages/Details/Details";
import NotFound from "../../pages/NotFound/NotFound";
import Pokemones from "../../pages/Pokemones/Pokemones";

const PokeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemones" element={<Pokemones />} />
      <Route path="/pokemon/:name" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PokeRoutes;
