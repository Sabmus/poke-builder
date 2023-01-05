import { useSelector } from "react-redux";
import { selectPokeStat } from "../../features/pokeStats/pokeStatsSlice";

import StatBuilder from "../../components/statBuilder/statBuilder.component";

import {
  DivPokeBuildContainer,
  DivPokeImage,
  DivStatBuilder,
  DivExtraData,
  DivStats,
  DivStatList,
  DivExtraInfo1,
  DivExtraInfo2,
} from "./pokeBuild.styles";

const PokeBuild = ({ pokemon }) => {
  const pokeStats = useSelector(selectPokeStat);

  console.log(pokemon);
  return (
    <DivPokeBuildContainer>
      <DivPokeImage imageUrl={`${pokemon.sprites.front_default}`} />
      <DivStatBuilder>
        {pokemon.stats.map((poke, id) => (
          <StatBuilder key={id} idx={id} stat={pokeStats.stats[id]} />
        ))}
      </DivStatBuilder>
      <DivStats>
        {pokemon.stats.map((poke, id) => (
          <DivStatList key={poke.stat.name}>
            <span>{poke.stat.name}</span>
            <span>
              {poke.base_stat + Math.trunc(pokeStats.stats[id].value / 4)}
            </span>
          </DivStatList>
        ))}
      </DivStats>
      <DivExtraData>
        <DivExtraInfo1>extra info</DivExtraInfo1>
        <DivExtraInfo2>banners</DivExtraInfo2>
      </DivExtraData>
    </DivPokeBuildContainer>
  );
};

export default PokeBuild;
