import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";



const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";

const Countries = () => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => setCountriesData(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);



  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap:"10px",
          alignItems:"center"
        }}
      >
        {countriesData.map((item)=>(
            <CountryCard name={item.name} flag={item.flag} abbr={item.abbr} key={item.abbr}/>
        ))}
      </div>
      
    </>
  );
};

export default Countries;
