import { DivSoloStat, InputSlider, InputStat } from "./statBuilder.styles";

const StatBuilder = () => {
  return (
    <DivSoloStat>
      <span>stat</span>
      <InputSlider type="range" min="1" max="255" defaultValue="1" />
      <InputStat maxLength="3" />
      +-
    </DivSoloStat>
  );
};

export default StatBuilder;
