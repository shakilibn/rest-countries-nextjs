import { useRouter } from "next/dist/client/router";
import React from "react";
import CountryDetails from "../../components/countyDetails/countryDetails";

const Name = () => {
  const router = useRouter();
  const { name } = router.query;
  return <CountryDetails name={name} />;
};

export default Name;
