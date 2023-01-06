import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { resetState } from "../../features/pokeStats/pokeStatsSlice";

import PokeBuild from "../../components/pokeBuild/pokeBuild.component";
import Spinner from "../../components/spinner/spinner.component";

const PokeCard = () => {
  const dispatch = useDispatch();
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

    dispatch(resetState());
    // eslint-disable-next-line
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
