import React from 'react';

const Weather = ({ weatherData }) => {
  // Check if the required data is available
  if (!weatherData || !weatherData.sys || !weatherData.main || !weatherData.weather || !weatherData.weather[0]) {
    return <p className="text-red-500">Weather data not available.</p>;
  }

  return (
    <div className="mt-8 p-4 bg-white rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-2">{weatherData.name}, {weatherData.sys.country}</h2>
      <p className="text-xl">Temperature: {weatherData.main.temp} °C</p>
      <p className="text-xl">Weather: {weatherData.weather[0].description}</p>
      <p className="text-xl">Humidity: {weatherData.main.humidity} %</p>
      <p className="text-xl">Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
