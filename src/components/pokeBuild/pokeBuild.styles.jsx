import styled from "styled-components";

const borderRadius = "10px";

export const BaseDiv = styled.div`
  padding: 0px;
  margin: 0px;
  border: 1px dotted rebeccapurple;
  border-radius: ${borderRadius};
`;

export const DivPokeBuildContainer = styled.div`
  display: grid;
  gap: 5px;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 1fr 2fr;
  border: 1px solid black;
  border-radius: ${borderRadius};
  width: 750px;
  height: 400px;
  padding: 5px;
  & .stat-list {
    ul {
      padding: 0px;
      margin: 0px;
      li {
        list-style-type: none;
        line-height: 20px;
      }
    }
  }
`;

export const DivPokeImage = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border: 1px dotted rebeccapurple;
  border-radius: ${borderRadius};
  position: relative;
`;

export const DivStatBuilder = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: 1fr 255px repeat(3, 1fr);
  align-items: center;
  gap: 5px;
  padding: 5px 0px;
  border: 1px dotted rebeccapurple;
  border-radius: ${borderRadius};
`;

export const DivExtraData = styled.div`
  display: grid;
  gap: 5px;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 1fr;
`;

export const DivStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 0px 5px;
  margin: 0px;
  border: 1px dotted rebeccapurple;
  border-radius: ${borderRadius};
`;
export const DivStatList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.linearGradient};
  border-radius: 15px;
`;

export const DivExtraInfo1 = styled(BaseDiv)``;
export const DivExtraInfo2 = styled(BaseDiv)`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-left: 5px;

  & .type {
    border-radius: 5px;
    padding: 0px 3px;
    border: 1px solid goldenrod;
    color: white;

    &:hover {
      text-shadow: 0 0 5px #ffffff;
    }
  }

  //all types
  & .normal {
    background-color: whitesmoke;
    color: black;
  }

  & .flying {
    background-color: lightskyblue;
    color: black;
  }

  & .fire {
    background-color: red;
  }

  & .water {
    background-color: blueviolet;
  }

  & .poison {
    background-color: darkorchid;
  }

  & .bug {
    background-color: darkolivegreen;
    opacity: 0.9;
  }

  & .electric {
    background-color: goldenrod;
  }

  & .ground {
    background-color: darkkhaki;
  }

  & .fairy {
    background-color: palevioletred;
  }

  & .grass {
    background-color: darkgreen;
  }

  & .fighting {
    background-color: burlywood;
  }

  & .dragon {
    background-color: darkorchid;
  }

  & .psychic {
    background-color: rebeccapurple;
  }

  & .rock {
    background-color: lightgray;
  }

  & .steel {
    background-color: steelblue;
  }

  & .ice {
    background-color: lightblue;
    color: white;
  }

  & .ghost {
    background-color: violet;
    color: white;
  }

  & .dark {
    background-color: black;
    color: white;
  }
`;

export const InputStat = styled.input`
  width: 60px;
  height: 20px;
  line-height: 10px;
  padding-left: 7px;
  font-size: 11px;
  margin: 0px;
  border: 1px dotted goldenrod;
`;

export const DivLvlInput = styled.span`
  position: absolute;
  margin: 0px;
  padding: 0px;
  left: 158px;
  background-color: white;
  border-radius: 15px;
`;
