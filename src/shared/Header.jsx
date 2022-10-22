import React from "react";
import "./style/header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const userSign = useSelector((state) => state.userName);
  return (
    <header>
      <div className="header__red">
        <div className="header__black">
          <div className="circle__header">
            <div className="circle-black"></div>
            <div className="circle-white"></div>
            <div></div>
          </div>
        </div>

        <div className="header__info">
          <img className="header__logo" src="/img/home/lgPokedex.png" alt="" />
          <p className="header-welcome__trainer">
            Welcome <span>{userSign}</span>, here you cand find all the pokemons
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
