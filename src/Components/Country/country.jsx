import { useState } from "react";

const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, capital, population, region, cca3 } = country;

  const [Visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(true);
  };

  return (
    <div
      style={{
        border: "2px solid blue",
        margin: "20px",
        padding: "10px",
        borderRadius: "15px",
      }}
      className={`${Visited && "visited"}`}
    >
      <h3>Country Name: {name?.common}</h3>
      <img src={flags.png} alt="" />
      <h4>Capital: {capital}</h4>
      <h5>Population: {population}</h5>
      <p>Region: {region}</p>
      <p>Code: {cca3}</p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Countries
      </button>
      <button style={{ marginLeft: "15px" }} onClick={handleVisited}>
        {Visited ? "Visited" : "Going"}
      </button>
      {/* {Visited && "I have visited this Country."} */}
      {Visited ? "I have visited this Country" : "I want to Visit."}
    </div>
  );
};

export default Country;
