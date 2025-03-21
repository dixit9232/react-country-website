import { useEffect, useState } from "react";
import { GlassmorphismCard } from "../components/UI/GlassmorphismCard";
import countries from "../APIs/country-data.json";

export const AboutPage = () => {
  const [countryDetails, setCountryDetails] = useState([]);

  useEffect(() => {
    setCountryDetails(countries);
  }, []);

  return (
    <section className="about-section">
      <div className="container">

        <h2 className="about-title">
          Here are the Interesting Facts <br />
          we’re proud of
        </h2>

        <div className="container grid grid-three-cols card-list">
          {countryDetails &&
            countryDetails.map((country) => {
              return <GlassmorphismCard key={country.id} country={country} />;
            })}
        </div>
      </div>
    </section>
  );
};
