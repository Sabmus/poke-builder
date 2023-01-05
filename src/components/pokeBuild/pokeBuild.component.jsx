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
  console.log(pokemon);
  return (
    <DivPokeBuildContainer>
      <DivPokeImage imageUrl={`${pokemon.sprites.front_default}`} />
      <DivStatBuilder>
        <StatBuilder />
        <StatBuilder />
        <StatBuilder />
        <StatBuilder />
        <StatBuilder />
        <StatBuilder />
      </DivStatBuilder>
      <DivStats>
        {pokemon.stats.map((poke) => (
          <DivStatList key={poke.stat.name}>
            <span>{poke.stat.name}</span>
            <span>{poke.base_stat}</span>
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
