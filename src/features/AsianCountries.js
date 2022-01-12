import React, { useState, useEffect } from "react";
import { Button } from "../common/Button/AddverbButton";
import "./asianCountries.css";
import { AddverbLoader } from "../common/Loader/AddverbLoader";

export const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  const url = "https://restcountries.com/v3.1/region/Asia";

  const fetchData = async () => {
    setLoadingData(true);
    const response = await fetch(url);
    const countries = await response.json();
    console.log(countries);
    setCountries(countries);
    setLoadingData(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {!loadingData && (
          <div>
            <div className="countries">
              {countries.map((country) => {
                const {
                  name,

                  capital,
                  flags,
                  region,
                  subregion,
                  population,
                  borders,
                  languages,
                } = country;

                return (
                  <article>
                    <div>
                      <div>
                        <img
                          className="flag"
                          src={flags.svg}
                          alt={name.common}
                        />
                      </div>

                      <div className="country-details">
                        <div>
                          <h2 className="country-name">{name.common}</h2>
                          <h5>
                            Capital: <span>{capital}</span>
                          </h5>
                          <h5>
                            Region: <span>{region}</span>
                          </h5>
                          <h5>
                            Sub Region: <span>{subregion}</span>
                          </h5>
                          <h5>
                            Population: <span>{population}</span>
                          </h5>
                        </div>

                        <div>
                          <h5>
                            Languages:
                            <span>{Object.values(languages).join()}</span>
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4>Border Countries: </h4>
                      <div className="borders">
                        {borders &&
                          borders.map((border) => {
                            return (
                              <ul key={border}>
                                <li>{border}</li>
                              </ul>
                            );
                          })}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div>
              <Button name="Refresh Data" handleClick={() => fetchData()} />
            </div>
          </div>
        )}
        {loadingData && <AddverbLoader />}
      </div>
    </div>
  );
};
