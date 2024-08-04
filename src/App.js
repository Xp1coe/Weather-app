import React, { useState } from 'react';
import Search from './Components/Search';
import Weather from './Components/Weather';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Weather App</h1>
      <Search setWeatherData={setWeatherData} />
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
};

export default App;
