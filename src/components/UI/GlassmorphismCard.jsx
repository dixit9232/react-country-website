import '../../css/about.css'

export const GlassmorphismCard = ({ country }) => {
  const { countryName, capital, population, interestingFact } = country;
  return (
    <div className="glassy-card">
      <h4> {countryName}</h4>
      <p>
        <span>Capital:</span> {capital}
      </p>
      <p>
        <span>Population:</span> {population.toLocaleString()}
      </p>
      <p>
        <span>Interesting Facts:</span> {interestingFact}
      </p>
    </div>
  );
};
