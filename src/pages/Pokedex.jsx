import axios from "axios";
import React, { useEffect, useState } from "react";
import InputSearch from "../components/InputSearch";
import Pagination from "../components/Pagination";
import PokeCard from "../components/PokeCard";
import SelectByType from "../components/SelectByType";
import Header from "../shared/Header";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [typeSelected, setTypeSelected] = useState("All Pokemon");

  useEffect(() => {
    if (typeSelected !== "All Pokemon") {
      // se ejecuta si seleccionamos un tipo - runs if we dont't select a type
      axios
        .get(typeSelected)
        .then((res) => {
          const result = res.data.pokemon.map((e) => e.pokemon);
          setPokemons(result);
        })
        .catch((err) => console.log(err));
    } else {
      // se ejecuta si no seleccionamos un tipo - is executed if we dont't select a type
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      axios
        .get(URL)
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err));
    }
  }, [typeSelected]);

  // pagination logic
  const [page, setPage] = useState(1);
  const [pokePerPage, setPokePerPage] = useState(9);
  const initialPoke = (page - 1) * pokePerPage;
  const finalPoke = page * pokePerPage;

  return (
    <div className="pokedex">
      <Header />
      <Pagination
        setPage={setPage}
        page={page}
        pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
      />
      <aside>
        <InputSearch />
        <SelectByType setPage={setPage} setTypeSelected={setTypeSelected} />
      </aside>
      <main className="global-container">
        <div className="card-container">
          {pokemons?.slice(initialPoke, finalPoke).map((pokemon) => (
            <PokeCard key={pokemon.url} url={pokemon.url} />
          ))}
        </div>
      </main>
      <Pagination
        className="lower__pagination"
        setPage={setPage}
        page={page}
        pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
      />
    </div>
  );
};

export default Pokedex;
