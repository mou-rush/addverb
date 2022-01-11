import React, { useState, useEffect } from "react";

export const Countries = () => {
  const url = "https://restcountries.com/v3.1/region/Asia";

  const [countries, setCountries] = useState([]);

  const fecthData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
  };
  useEffect(() => {
    fecthData();
  }, []);

  return (
    <div>
      {countries.map((country) => {
        const { id } = country;
        return <article key={id}>Country Data</article>;
      })}
    </div>
  );
};
