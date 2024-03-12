import "./WeatherForm.scss";

function WeatherForm({ searchInput, handleSearchInput }) {
  return (
    <form id="city--form">
      <div>
        <input
          id="city--input"
          placeholder="Enter a city name..."
          className="input--open"
          name="city"
          value={searchInput}
          onChange={handleSearchInput}
        />
        <div id="search--result">
          <ul>
            <li>Paris, France</li>
            <li>Paris, France</li>
            <li>Paris, France</li>
            <li>Paris, France</li>
          </ul>
        </div>
      </div>
    </form>
  );
}

export default WeatherForm;
