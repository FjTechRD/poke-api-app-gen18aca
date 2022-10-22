import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style/selectbytype.css";

const SelectByType = ({ setTypeSelected, setPage }) => {
  const [types, setTypes] = useState();
  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type";
    axios
      .get(URL)
      .then((res) => setTypes(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setTypeSelected(e.target.value);
    setPage(1);
  };

  return (
    <section>
      <select onChange={handleChange} className="list__type">
        <option value="All Pokemon">All Pokemons</option>
        {types?.map((type) => (
          <option className="option__list" key={type.url} value={type.url}>
            {type.name}
          </option>
        ))}
      </select>
    </section>
  );
};

export default SelectByType;
