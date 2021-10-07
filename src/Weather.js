import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
  
    function handleResponse(response) {
      setWeatherData({
        ready: true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name,
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      search();
    }
  
    function handleCityChange(event) {
      setCity(event.target.value);
    }
  
    function search() {
      const apiKey = "6f65ac3695a44ef64022cd653378b553";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(handleResponse);
    }
  
    let form = (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          size="sm"
          placeholder="Enter a city.."
          autoFocus={true}
          onChange={handleCityChange}
        />
        <input type="submit" value="search" />
      </form>
    );




if (weatherData.ready) {
   return (
    <div className="Weather">
      {form}
      <WeatherInfo data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates} />
        
        </div>
      );
    } else {
      search();
      return form;
    }
  }