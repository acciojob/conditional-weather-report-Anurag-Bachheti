import React, { useState } from 'react'

function WeatherDisplay() {

  const weatherList = [
    { temperature: 25, conditions: "Sunny" },
    { temperature: 15, conditions: "Windy" },
    { temperature: 35, conditions: "Hot" }
  ]

  return (
    <div>
      {
        weatherList.map((weather, index) => {
          const tempStyle = {
            color: weather.temperature > 20 ? 'blue' : 'red'
          };
          return (
            <div key={index}>
              <span>
                <p style={tempStyle}>Temperature:{weather.temperature}</p>
              </span>
              <p>Conditions: {weather.conditions}</p>
            </div>)
        })
      }
    </div>
  )
}

export default WeatherDisplay