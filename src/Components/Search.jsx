import React, { useState } from 'react';

const Search = ({ setWeatherData }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const fetchWeather = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error
    try {
      const geocodeResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
      const geocodeData = await geocodeResponse.json();
      if (geocodeData.length === 0) {
        throw new Error('Location not found');
      }
      const { lat, lon } = geocodeData[0];
      const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
      const weatherData = await weatherResponse.json();
      setWeatherData({
        location: query,
        ...weatherData.current_weather,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={fetchWeather} className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Enter city"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Get Weather
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </form>
  );
};

export default Search;
