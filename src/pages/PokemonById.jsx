import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error404 from "../components/Error404";
import "./style/pokemonbyid.css";

const PokemonById = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  }, []);

  if (notFound) {
    return <Error404 />;
  }

  return (
    <article className={`pokemon__by-id bg__pk-${pokemon?.types[0].type.name}`}>
      <div className="container__bg">
        <div className="pokemon-header">
          <div
            className={`card-pokemon-id bg__pk-${pokemon?.types[0].type.name}`}
          >
            <header className="poke-id__header">
              <h3>{pokemon?.weight} weight </h3>
              <img
                className="poke__img"
                src={pokemon?.sprites.other["official-artwork"].front_default}
                alt=""
              />
              <h3>{pokemon?.height} height </h3>
            </header>
            <section className="poke-id__name">
              <h4>#{pokemon?.id}</h4>
              <h2>{pokemon?.name}</h2>
            </section>
          </div>
        </div>

        <div className="type-stats__pokemon">
          <section className="pokeid-type-abilites">
            <div className="pokeid-type">
              <ul className="crd-pk-tp-container">
                <label>type</label>
                {pokemon?.types.map((types) => (
                  <li key={types.slot} className="card-poke__item">
                    {types.type.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pokeid-ability">
              <ul className="card-poke__ability-container">
                <label>abilities</label>
                {pokemon?.abilities.map((ability) => (
                  <li key={ability.url} className="card-poke__item">
                    {ability.ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="stats-container">
            <h2>Stats</h2>
            <div>
              <ul>
                {pokemon?.stats.map((stats) => (
                  <div>
                    <li className="stats__name" key={stats.url}>
                      {stats.stat.name}
                    </li>
                    <li className="stats__bar" key={stats.stat.url}>
                      {stats.base_stat}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <section className="pokemon__movements">
          <h2>movements</h2>
          <ul>
            {pokemon?.moves.map((moves) => (
              <li className="pokemon__movements-li" key={moves.move.url}>
                {moves.move.name}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
};

export default PokemonById;
