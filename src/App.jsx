import { useEffect, useState } from 'react';
import Header from "./components/Header";
import WeatherDetails from "./components/WeatherDetails";
import Footer from "./components/Footer";
import './App.css';

import searchIcon from './assets/search.png';
import clearIcon from './assets/clear.png';
import cloudIcon from './assets/cloud.png';
import drizzleIcon from './assets/drizzle.png';
import rainIcon from './assets/rain.png';
import snowIcon from './assets/snow.png';


function App() {
  let api_key = "8ec9b1cb9d89c22b60c03e1bb61741e4";
  const [text, setText] = useState("Pollachi");

  const [icon, setIcon] = useState(snowIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("Pollachi");
  const [country, setCountry] = useState("IN");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);

  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  const weatherIcons = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": drizzleIcon,
    "03n": drizzleIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon,
  };

  const search = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=metric`;

    try {
      let result = await fetch(url);
      let data = await result.json();
      if (data.cod === "404") {
        console.error("City not found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);
      const weatherCode = data.weather[0].icon;
      setIcon(weatherIcons[weatherCode] || clearIcon);
      setCityNotFound(false);

    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Failed to fetch weather data. Please try again later.");
    }
    finally {
      setLoading(false);
    }
  }

  const handleCity = (e) => {
    setText(e.target.value);
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  }

  useEffect(function () {
    search();
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <div className="input-container">
          <input type="text" className="cityInput" placeholder="Search City" onChange={handleCity} value={text} onKeyDown={handleKeyDown} />
          <div className="search-icon" onClick={() => search()}>
            <img src={searchIcon} alt="search" />
          </div>
        </div>
        <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind} loading={loading} cityNotFound={cityNotFound} error={error} />
        <Footer />
      </div>
    </>
  )
}

export default App

