import React, { useState } from "react";
import axios from "./Api";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeatherConditions] = useState({});
  const [loaded, setLoaded] = useState(false);

  function displayWeatherConditions(response) {
    setLoaded(true);
    setWeatherConditions({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f65ac3695a44ef64022cd653378b553&units=imperial`;
    axios.get(apiUrl).then(displayWeatherConditions);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter a city.."
        autoFocus={true}
        onChange={updateCity}
      />
      <input type="submit" value="search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}

        <h3> In {city} we have: </h3>

        <ul>
          <li> Temperature: {Math.round(weather.temperature)}°F </li>
          <li> Humidity: {weather.humidity}%</li>
          <li> Description: {weather.description} </li>
          <li> Wind: {Math.round(weather.wind)} kmh </li>

          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
