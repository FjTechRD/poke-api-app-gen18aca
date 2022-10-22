import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { setGlobalUser } from "../store/slices/user.slice";

const FormHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setGlobalUser(e.target.inpName.value.trim()));
    navigate("/pokedex");
  };

  return (
    <form onSubmit={handleSubmit} className="sign__form">
      <input
        className="input__name"
        placeholder="Enter your name here"
        type="text"
        id="inpName"
      />
      <button className="btn">Register</button>
    </form>
  );
};

export default FormHome;
