import { useDispatch } from "react-redux";
import {
  modifyStat,
  modifyIv,
  modifyNature,
} from "../../features/pokeStats/pokeStatsSlice";

import {
  InputSlider,
  InputStat,
  SpanStatName,
  SpanNature,
} from "./statBuilder.styles";

const incrementNature = 1.1;
const decrementNature = 0.9;
const neutralNature = 1.0;

const StatBuilder = ({ idx, statData }) => {
  const dispatch = useDispatch();

  const { maxEv, stat } = statData;

  const maxInputByMaxEv = () => {
    if (stat.ev >= 252) {
      return 252;
    } else {
      if (252 - stat.ev <= maxEv) {
        return 252;
      } else {
        return stat.ev + maxEv;
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

  const onClickNatureHandler = (event) => {
    switch (event.target.innerHTML) {
      case "+-":
        event.target.innerHTML = "+";
        dispatch(
          modifyNature({ natureMultiplier: incrementNature, statId: idx })
        );
        break;
      case "+":
        event.target.innerHTML = "-";
        dispatch(
          modifyNature({ natureMultiplier: decrementNature, statId: idx })
        );
        break;
      case "-":
        event.target.innerHTML = "+-";
        dispatch(
          modifyNature({ natureMultiplier: neutralNature, statId: idx })
        );
        break;
      default:
        event.target.innerHTML = "+-";
    }
  };

  return (
    <>
      <SpanStatName>{stat.name}</SpanStatName>
      <InputSlider
        label="inputRange"
        type="range"
        name="inputEvRange"
        min="0"
        max={`${maxInputByMaxEv()}`}
        maxWidth={`${maxInputByMaxEv()}px`}
        defaultValue={stat.ev}
        onMouseUp={onMouseUpHandler}
      />
      <InputStat
        label="inputStat"
        type="text"
        name="inputEvStat"
        value={stat.ev}
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
      {idx === 0 ? (
        <span></span>
      ) : (
        <SpanNature onClick={onClickNatureHandler}>+-</SpanNature>
      )}
    </>
  );
};

export default StatBuilder;
