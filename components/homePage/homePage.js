import React, { useEffect, useState } from "react";
import CountryCard from "../countryCard/countryCard";
import styles from "./homePage.module.css";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className={styles.container}>
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </div>
  );
};

export default HomePage;
