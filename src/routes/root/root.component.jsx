import { Outlet } from "react-router-dom";

import Search from "../../components/search/search.component";
import Navbar from "../../components/NavBar/navbar.component";
import NavElement from "../../components/NavElement/nav-element.component";

import { useSelector } from "react-redux";
import { selectSearch } from "../../features/search-bar/searchSlice";

import pokes from "../../assets/pokes.json";

const Root = () => {
  const search = useSelector(selectSearch);

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Search />
        </div>
        <Navbar>
          {pokes
            .slice(0, 151)
            .filter((poke) =>
              poke.identifier.toLowerCase().includes(search.toLowerCase())
            )
            .map((poke) => (
              <NavElement key={poke.id} poke={poke} />
            ))}
        </Navbar>
      </div>
      <div id="detail">
        <h1>Welcome to PokeBuilder</h1>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
