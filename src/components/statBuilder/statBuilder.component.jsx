import { useDispatch } from "react-redux";
import { modifyStat, modifyIv } from "../../features/pokeStats/pokeStatsSlice";

import { InputSlider, InputStat } from "./statBuilder.styles";

const StatBuilder = ({ idx, statData }) => {
  const dispatch = useDispatch();

  const { maxEv, stat } = statData;

  const maxInputByMaxEv = () => {
    if (stat.value >= 252) {
      return 252;
    } else {
      if (252 - stat.value <= maxEv) {
        return 252;
      } else {
        return stat.value + maxEv;
      }
    }
  };

  const onMouseUpHandler = (event) => {
    dispatch(modifyStat({ ev: parseInt(event.target.value), statId: idx }));
  };

  const onChangeEvHandler = (event) => {
    if (event.target.value) {
      dispatch(modifyStat({ ev: parseInt(event.target.value), statId: idx }));
    } else {
      dispatch(modifyStat({ ev: 0, statId: idx }));
    }
  };

  const onChangeIvHandler = (event) => {
    dispatch(modifyIv({ iv: parseInt(event.target.value), statId: idx }));
  };

  return (
    <>
      <span>{stat.name}</span>
      <InputSlider
        label="inputRange"
        type="range"
        name="inputEvRange"
        min="0"
        max={`${maxInputByMaxEv()}`}
        maxWidth={`${maxInputByMaxEv()}px`}
        defaultValue={stat.value}
        onMouseUp={onMouseUpHandler}
      />
      <InputStat
        label="inputStat"
        type="text"
        name="inputEvStat"
        value={stat.value}
        maxLength="3"
        placeholder="ev"
        onChange={onChangeEvHandler}
      />
      <InputStat
        type="number"
        min={0}
        max={31}
        placeholder="iv"
        defaultValue={31}
        onChange={onChangeIvHandler}
      />
      +-
    </>
  );
};

export default StatBuilder;
