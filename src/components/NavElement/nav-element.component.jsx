import { Link } from "react-router-dom";

const NavElement = ({ poke }) => {
  const Capitalize = (word) => {
    return word[0].toUpperCase() + word.substring(1);
  };

  return (
    <li>
      <Link to={`/poke-builder/${poke.name}`}>{Capitalize(poke.name)}</Link>
    </li>
  );
};
export default NavElement;
