import { useDispatch } from "react-redux";
import { modifyStat } from "../../features/pokeStats/pokeStatsSlice";

import { DivSoloStat, InputSlider, InputStat } from "./statBuilder.styles";

const StatBuilder = ({ idx, stat }) => {
  const dispatch = useDispatch();

  const onMouseUpHandler = (event) => {
    dispatch(modifyStat({ ev: parseInt(event.target.value), statId: idx }));
  };

  return (
    <DivSoloStat>
      <span>{stat.name}</span>
      <InputSlider
        type="range"
        min="0"
        max="252"
        defaultValue="1"
        onMouseUp={onMouseUpHandler}
      />
      <span>{stat.value}</span>
      <InputStat maxLength="3" />
      +-
    </DivSoloStat>
  );
};

export default StatBuilder;
