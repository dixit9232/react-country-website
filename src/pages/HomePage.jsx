import { FiArrowUpRight } from "react-icons/fi";
import "../css/homepage.css";
import { NavLink } from "react-router-dom";
import { AboutPage } from "./AboutPage";

export const HomePage = () => {
  return (
    <>
      <MainSection /> 
      <AboutPage />
    </>
  );
};

const MainSection = () => {
  return (
    <main className="home-page">
      <div className="container grid grid-two-cols">
        <section className="hero-section">
          <h1>Explore the World, One Country at a Time.</h1>
          <p>
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <button className="btn" aria-label="Start exploring countries">
            <NavLink to="/country">
              Start Exploring <FiArrowUpRight size={20} />
            </NavLink>
          </button>
        </section>
        <div className="hero-image">
          <img src="/world.png" alt="World Map" loading="lazy" />
        </div>
      </div>
    </main>
  );
};
