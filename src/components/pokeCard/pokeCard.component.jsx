import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  fetchPokemonData,
  currentStatus,
  pokemonCurrentData,
} from "../../features/pokemon/pokemonSlice";
import { resetState } from "../../features/pokeStats/pokeStatsSlice";

import PokeBuild from "../../components/pokeBuild/pokeBuild.component";
import Spinner from "../../components/spinner/spinner.component";

const PokeCard = () => {
  const dispatch = useDispatch();
  const { pokeQ } = useParams();

  const pokeData = useSelector(pokemonCurrentData);
  const currentPokeStatus = useSelector(currentStatus);

  useEffect(() => {
    dispatch(fetchPokemonData(pokeQ));

    dispatch(resetState());
  }, [pokeQ, dispatch]);

  return (
    <div>
      {currentPokeStatus === "loading" ? (
        <Spinner />
      ) : (
        <PokeBuild key={pokeData.id} pokemon={pokeData} />
      )}
    </div>
  );
};

export default PokeCard;
