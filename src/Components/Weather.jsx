import React from 'react';

const getWeatherDescription = (code) => {
  const descriptions = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Drizzle: Light',
    53: 'Drizzle: Moderate',
    55: 'Drizzle: Dense intensity',
    56: 'Freezing Drizzle: Light',
    57: 'Freezing Drizzle: Dense intensity',
    61: 'Rain: Slight',
    63: 'Rain: Moderate',
    65: 'Rain: Heavy intensity',
    66: 'Freezing Rain: Light',
    67: 'Freezing Rain: Heavy intensity',
    71: 'Snow fall: Slight',
    73: 'Snow fall: Moderate',
    75: 'Snow fall: Heavy intensity',
    77: 'Snow grains',
    80: 'Rain showers: Slight',
    81: 'Rain showers: Moderate',
    82: 'Rain showers: Violent',
    85: 'Snow showers: Slight',
    86: 'Snow showers: Heavy',
    95: 'Thunderstorm: Slight or moderate',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail',
  };

  return descriptions[code] || 'Unknown weather';
};

const Weather = ({ weatherData }) => {
  // Check if the required data is available
  if (!weatherData) {
    return <p className="text-red-500">Weather data not available.</p>;
  }

  return (
    <div className="mt-8 p-4 bg-white rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-2">{weatherData.location}</h2>
      <p className="text-xl">Temperature: {weatherData.temperature} °C</p>
      <p className="text-xl">Weather: {getWeatherDescription(weatherData.weathercode)}</p>
      <p className="text-xl">Wind Speed: {weatherData.windspeed} m/s</p>
    </div>
  );
};

export default Weather;
