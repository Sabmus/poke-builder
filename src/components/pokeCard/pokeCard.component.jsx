import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PokeBuild from "../../components/pokeBuild/pokeBuild.component";
import Spinner from "../../components/spinner/spinner.component";

const PokeCard = () => {
  const { pokeQ } = useParams();
  const [pokeData, setPokeData] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeQ}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("failed fetching", response.status);
        }
      })
      .then((data) => setPokeData({ pokeData: data }))
      .catch((error) => console.log(error));
  }, [pokeQ]);

  return (
    <div>
      {Object.keys(pokeData).length === 0 ? (
        <Spinner />
      ) : (
        <PokeBuild key={pokeData.pokeData.id} pokemon={pokeData.pokeData} />
      )}
    </div>
  );
};

export default PokeCard;
