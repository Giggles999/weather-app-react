import React, { useState } from "react";
import "./Overview.css";

export default function City(props) {
  let [temperature, setTemperature] = useState(props.temperature);
  let [unit, setUnit] = useState("Metric");
  function showFarehrenheit(event) {
    event.preventDefault();
    setUnit("Imperial");
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("Metric");
    setTemperature(props.temperature);
  }

  return (
    <div class="ResultTemp">
      {temperature} ({unit}){" "}
      <a href="/" onClick={showCelsius}>
        °C{" "}
      </a>{" "}
      |{" "}
      <a href="/" onClick={showFarehrenheit}>
        °F{" "}
      </a>{" "}
    </div>
  );
}
