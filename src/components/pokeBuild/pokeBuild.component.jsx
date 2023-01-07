import { useDispatch, useSelector } from "react-redux";
import {
  selectPokeStat,
  modifyLvl,
} from "../../features/pokeStats/pokeStatsSlice";

import StatBuilder from "../../components/statBuilder/statBuilder.component";
import { StatCalculator } from "../../utils/statCalculator";
import { CapitalizeWord } from "../../utils/utils.js";

import {
  DivPokeBuildContainer,
  DivPokeImage,
  DivStatBuilder,
  DivExtraData,
  DivStats,
  DivStatList,
  DivExtraInfo1,
  DivExtraInfo2,
  InputStat,
  DivLvlInput,
} from "./pokeBuild.styles";

// constant
const maxEvValue = 510;

const PokeBuild = ({ pokemon }) => {
  const dispatch = useDispatch();
  const pokeStats = useSelector(selectPokeStat);

  console.log(pokemon);

  const onChangeLvlHandler = (event) => {
    dispatch(modifyLvl(parseInt(event.target.value)));
  };

  return (
    <>
      <h3>{CapitalizeWord(pokemon.name)}</h3>
      <DivPokeBuildContainer>
        <DivPokeImage imageUrl={`${pokemon.sprites.front_default}`}>
          <DivLvlInput>
            <label style={{ padding: "0px 4px" }}>lvl</label>
            <InputStat
              type="number"
              min={1}
              max={100}
              defaultValue={100}
              onChange={onChangeLvlHandler}
            />
          </DivLvlInput>
        </DivPokeImage>
        <DivStatBuilder>
          {pokemon.stats.map((poke, id) => (
            <StatBuilder
              key={id}
              idx={id}
              statData={{ maxEv: pokeStats.maxEv, stat: pokeStats.stats[id] }}
            />
          ))}
        </DivStatBuilder>
        <DivStats>
          {pokemon.stats.map((poke, id) => (
            <DivStatList
              key={poke.stat.name}
              linearGradient={`linear-gradient(to right, goldenrod ${
                (pokeStats.stats[id].ev / maxEvValue) * 100 * 2 // 100: to show percentage from 1 to 100, 2: can be 2 ev at 100%
              }%, transparent 0px)`}
            >
              <span style={{ paddingLeft: "10px" }}>{poke.stat.name}</span>
              <span>
                {StatCalculator(
                  poke.base_stat,
                  pokeStats.stats[id].iv,
                  pokeStats.stats[id].ev,
                  pokeStats.pokeLvl,
                  pokeStats.stats[id].nature,
                  id === 0 && true
                )}
              </span>
            </DivStatList>
          ))}
        </DivStats>
        <DivExtraData>
          <DivExtraInfo1>extra info</DivExtraInfo1>
          <DivExtraInfo2>
            {pokemon.types.map((type) => (
              <span key={type.type.name} className={`type ${type.type.name}`}>
                {type.type.name}
              </span>
            ))}
          </DivExtraInfo2>
        </DivExtraData>
      </DivPokeBuildContainer>
    </>
  );
};

export default PokeBuild;
