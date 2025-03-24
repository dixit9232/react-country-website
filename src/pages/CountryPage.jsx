import { useEffect, useState, useTransition } from "react";
import { fetchAllCountriesDetails } from "../APIs/countries-api";
import { Loader } from "../components/UI/Loader";
import "../css/country.css";

export const CountryPage = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name");
  const [error, setError] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        const response = await fetchAllCountriesDetails();
        setCountries(response.data);
      } catch (err) {
        setError("Failed to fetch country details. Please try again later.\n",err);
      }
    });
  }, []);

  const filteredAndSortedCountries = () => {
    let filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filtered.sort((a, b) => {
      if (sortOption === "name") {
        return a.name.common.localeCompare(b.name.common);
      } else if (sortOption === "region") {
        return a.region.localeCompare(b.region);
      } else if (sortOption === "capital") {
        return (a.capital?.[0] || "").localeCompare(b.capital?.[0] || "");
      }
      return 0;
    });
  };

  if (isPending) return <Loader />;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <section>
      <div className="container">
        <div className="controls">
          <input
            type="text"
            placeholder="Search country..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="sort-select"
          >
            <option value="name">Sort by Name</option>
            <option value="region">Sort by Region</option>
            <option value="capital">Sort by Capital</option>
          </select>
        </div>

        <div className="countries-list grid grid-four-cols">
          {filteredAndSortedCountries().map((country) => {
            const { name, capital, region, flags, cca3 } = country;
            return (
              <div className="country-card" key={cca3}>
                <img src={flags.svg} alt={name.common} className="flag" />
                <h4 className="country-name">{name.common}</h4>
                <p>
                  <span>Capital:</span> {capital[0] ? capital[0] : "N/A"}
                </p>
                <p>
                  <span>About:</span> {name.official}
                </p>
                <p>
                  <span>Region:</span> {region}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
