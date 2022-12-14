import React from "react";
import { Link } from "react-router-dom";
import "./style/error404.css";

const Error404 = () => {
  return (
    <section className="not__found-bg">
      <div className="not__found">
        <h2>404</h2>
        <h3>Pokemon not Found</h3>
        <Link to="/pokedex">Return to Pokedex</Link>
      </div>
    </section>
  );
};

export default Error404;
