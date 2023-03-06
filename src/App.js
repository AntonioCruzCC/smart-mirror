import React from 'react';
import './App.css';
import WeatherWidget from './wheaterWidget/WeatherWidget';

function App() {
  return (
    <div className='app'>
      <div className='weather-widget'>
        <WeatherWidget></WeatherWidget>
      </div>
    </div>
  );
}

export default App;
