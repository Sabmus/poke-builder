import styled from "styled-components";

export const InputSlider = styled.input`
  appearance: none;
  width: ${(props) => props.maxWidth};
  height: 5px;
`;

export const InputStat = styled.input`
  width: 60px;
  height: 20px;
  line-height: 10px;
  padding-left: 7px;
  font-size: 11px;
  margin: 0px;
`;

export const SpanStatName = styled.span`
  padding-left: 4px;
  margin: 0px;
`;

export const SpanNature = styled.span`
  user-select: none;
  font-size: 18px;
  padding: 0px;
  margin: 0px;
  text-align: center;
`;
