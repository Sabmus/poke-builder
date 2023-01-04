import { Routes, Route } from "react-router-dom";

import PokeCard from "../../components/pokeCard/pokeCard.component";

const Poke = () => {
  return (
    <Routes>
      <Route path=":pokeQ" element={<PokeCard />} />
    </Routes>
  );
};

export default Poke;
