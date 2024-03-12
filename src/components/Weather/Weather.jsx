import "./Weather.scss";
import WeatherForm from "../WeatherForm";
import { useState, useEffect } from "react";

function Weather() {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (searchInput === "") {
      return;
    }

    async function getData(signal) {
      const API_KEY = import.meta.env.VITE_API_MAP_KEY;
      const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${API_KEY}&input=${searchInput}&type=(cities)`;
      const proxyUrl = "https://corsproxy.io/?" + encodeURIComponent(url);
      console.log(proxyUrl);
      const response = await fetch(proxyUrl, { signal });
      const json = await response.json();
      console.log(json);
    }

    const controller = new AbortController();
    const signal = controller.signal;
    getData(signal);

    return () => {
      console.log("aborted")
      controller.abort();
    };
  }, [searchInput]);

  function handleSearchInput(event) {
    const value = event.target.value;
    setSearchInput(value);
  }

  return (
    <section id="weather--box">
      <WeatherForm
        searchInput={searchInput}
        handleSearchInput={handleSearchInput}
      />
    </section>
  );
}

export default Weather;
