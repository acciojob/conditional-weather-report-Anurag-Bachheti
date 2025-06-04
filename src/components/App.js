import React, { useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weatherDataList, setWeatherDataList] = useState([
    {
      temperature: 25,
      conditions: "Sunny"
    },
    {
      temperature: 15,
      conditions: "Windy"
    }
  ]);

  return (
    <div>
      {weatherDataList.map((weather, index) => (
        <WeatherDisplay key={index} weather={weather} />
      ))}
    </div>
  )
}

export default App
