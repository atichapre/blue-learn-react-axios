import { useEffect, useState } from "react";
import axios from "axios";

export function Thailand() {
  const [nameOfCountry, setNameOfCountry] = useState("");
  const [nameOfCountryOfficial, setNameOfCountryOfficial] = useState("");
  const [nameOfCountryLocal, setNameOfCountryLocal] = useState("");
  const [currency, setCurrency] = useState("");
  const [capital, setCapital] = useState("");
  const [officialLang, setOfficialLang] = useState("");
  const [population, setPopulation] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [continent, setContinent] = useState("");
  const [location, setLocation] = useState("");
  const [flag, setFlag] = useState("");
  const [alt, setAlt] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/name/thailand")
      .then((res) => {
        setNameOfCountry(res.data[0].name.common);
        setNameOfCountryOfficial(res.data[0].name.official);
        setFlag(res.data[0].flags.png);
        setNameOfCountryLocal(res.data[0].name.nativeName.tha.common);
        setCurrency(res.data[0].currencies.THB.name);
        setCapital(res.data[0].capital);
        setOfficialLang(res.data[0].languages.tha);
        setPopulation(res.data[0].population.toLocaleString());
        setTimeZone(res.data[0].timezones);
        setContinent(res.data[0].continents);
        setLocation(res.data[0].maps.googleMaps);
        setAlt(res.data[0].flags.alt);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen w-full p-6 bg-amber-100">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="bg-white shadow-md rounded-xl p-10 my-5 space-y-4 text-xl  hover:bg-gray-50 transition max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">
            {nameOfCountry}
          </h1>
          <h2 className="text-2xl font-bold mb-4 text-center">
            {nameOfCountryLocal}
          </h2>
          <img
            src={flag}
            className="flex justify-self-center mb-10"
            alt={alt}
          ></img>
          <div className="place-self-center space-y-2 tracking-wide py-6">
            <p>Official Name: {nameOfCountryOfficial}</p>
            <p>Currency: {currency}</p>
            <p>Capital: {capital}</p>
            <p>Official Language: {officialLang}</p>
            <p>Population: {population}</p>
            <p>Time zone: {timeZone}</p>
            <p>Continent: {continent}</p>
          </div>
        </div>
      )}
      {!loading && !error && (
        <div className="flex justify-self-center p-4 bg-yellow-400 hover:bg-yellow-200 transition-all rounded-xl py-5 text-2xl">
          <a href={location}>See the location of {nameOfCountry}</a>
        </div>
      )}
    </div>
  );
}
