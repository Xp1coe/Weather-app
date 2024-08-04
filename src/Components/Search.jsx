import React, { useState } from 'react';

const Search = ({ setWeatherData }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const fetchWeather = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error
    const API_KEY = '52c1f73a759cab9a3c6dceceedd05163'; // Replace with your actual API key
    try {
      const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${API_KEY}`);
      const data = await response.json();
      if (data.cod !== 200) {
        throw new Error(data.message);
      }
      setWeatherData(data);
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
