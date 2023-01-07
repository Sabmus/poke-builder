import { NavLink } from "react-router-dom";
import { CapitalizeWord } from "../../utils/utils";

const NavElement = ({ poke }) => {
  return (
    <li>
      <NavLink to={`/poke-builder/${poke.name}`}>
        {CapitalizeWord(poke.name)}
      </NavLink>
    </li>
  );
};
export default NavElement;
