import React from "react";
import { useNavigate } from "react-router-dom";

const InputSearch = () => {
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`);
  };

  return (
    <form onSubmit={submit}>
      <input
        className="input__name"
        id="search"
        type="text"
        placeholder="Search your Pokemon..."
      />
      <button className="btn">Search</button>
    </form>
  );
};

export default InputSearch;
