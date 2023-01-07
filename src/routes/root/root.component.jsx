import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Search from "../../components/search/search.component";
import Navbar from "../../components/NavBar/navbar.component";
import NavElement from "../../components/NavElement/nav-element.component";
import Spinner from "../../components/spinner/spinner.component";

import {
  currentStatus,
  currentData,
  fetchPokemonList,
} from "../../features/pokedex/pokedexSlice";

import { selectSearch } from "../../features/search-bar/searchSlice";

const Root = () => {
  const dispatch = useDispatch();
  const pokedexStatus = useSelector(currentStatus);
  const pokeData = useSelector(currentData);

  useEffect(() => {
    if (pokedexStatus === "idle") {
      dispatch(fetchPokemonList());
    }
  }, [pokedexStatus, dispatch]);

  const search = useSelector(selectSearch);

  return (
    <>
      <div id="sidebar">
        <h1>
          <a
            href="https://reactrouter.com/en/main"
            target="_blank"
            rel="noreferrer"
          >
            <span></span>
          </a>{" "}
          Poke Builder
        </h1>
        <div>
          <Search />
        </div>
        <Navbar>
          {pokedexStatus === "loading" ? (
            <Spinner />
          ) : (
            pokeData
              .filter((poke) => poke.name.includes(search.toLowerCase()))
              .map((poke) => <NavElement key={poke.name} poke={poke} />)
          )}
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
