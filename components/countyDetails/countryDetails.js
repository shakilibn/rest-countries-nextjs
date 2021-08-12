import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./countryDetails.module.css";

const CountryDetails = ({ name }) => {
  const [country, setCountry] = useState({});

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]))
      .catch((err) => console.log(err));
  }, []);

  console.log(country);
  const { name: cName, flag, population, capital, area, region } = country;
  // console.log(flag);
  return (
    <div className={styles.container}>
      {/* {flag && <Image src={flag} alt={flag} width={500} height={500} />} */}
      <h2>{cName}</h2>
      <h5>capital : {capital}</h5>
      <h5>population : {population}</h5>
      <h5>area : {area}</h5>
      <h5>region : {region}</h5>
    </div>
  );
};

export default CountryDetails;
