import Link from "next/link";
import React from "react";
import styles from "./countryCard.module.css";

const CountryCard = ({ country }) => {
  const { name, flag, capital, population } = country;
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <h4>{capital}</h4>
      <h6>{population}</h6>
      <Link href="/country/[name]" as={`/country/${name}`}>
        <button>view details</button>
      </Link>
    </div>
  );
};

export default CountryCard;
