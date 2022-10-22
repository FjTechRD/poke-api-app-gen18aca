import React from "react";
import FormHome from "../components/FormHome";
import Footer from "../shared/Footer";
import "./style/home.css";

const Home = () => {
  return (
    <main className="home">
      <section className="register">
        <img
          src="/img/home/lgPokedex.png"
          alt="Pokedex Logotipe"
          className="lgpokedex"
        />
        <div className="signup">
          <div className="welcome">
            <h2>
              Welcome <span> Trainer</span>!
            </h2>
            <h3>Give me your name to see the pokedex</h3>
            <FormHome />
          </div>

          <div className="welcome__img">
            <img src="/img/home/Rangers_ROZA.png" alt="Trainers" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
