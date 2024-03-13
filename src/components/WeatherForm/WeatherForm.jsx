import { useEffect, useState, useRef } from "react";
import "./WeatherForm.scss";

function WeatherForm({ searchInput, handleSearchInput, citiesFound }) {

  const [isResultOpen, setIsResultOpen] = useState(false)

  const inputRef = useRef(null);
  
  function toggleCitiesResult() {
    if(!isResultOpen) {
      setIsResultOpen(true)
    }
  }

  function handleOutsideClick(e) {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setIsResultOpen(false);
    }
  }

  useEffect(() => {

    if(!isResultOpen) return;

    inputRef.current.addEventListener("mousedown", handleOutsideClick);
    return () => {
      inputRef.current.removeEventListener("mousedown", handleOutsideClick);
    };
  },[isResultOpen])


  const citiesElements = citiesFound.map(city => <li key={city}>{city}</li>)

  return (
    <form id="city--form">
      <div>
        <input
          ref={inputRef}
          id="city--input"
          placeholder="Enter a city name..."
          autoComplete="off"
          className={isResultOpen ? "input--open" : "input--close"}
          name="city"
          value={searchInput}
          onChange={(e) => {
            handleSearchInput(e);
            toggleCitiesResult();
           }}
        />
        {isResultOpen && <div id="search--result">
                            <ul>
                            {citiesElements}
                            </ul>
                          </div>}
      </div>
    </form>
  );
}

export default WeatherForm;
