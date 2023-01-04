import { NavLink } from "react-router-dom";

const NavElement = ({ poke }) => {
  const Capitalize = (word) => {
    return word[0].toUpperCase() + word.substring(1);
  };

  return (
    <li>
      <NavLink to={`/${poke.identifier}`}>
        {Capitalize(poke.identifier)}
      </NavLink>
    </li>
  );
};
export default NavElement;
