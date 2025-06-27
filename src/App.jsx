import {useState} from 'react';
import Header from "./components/Header";
import WeatherDetails from "./components/WeatherDetails";
import Footer from "./components/Footer";
import './App.css';

import searchIcon from './assets/search.png';  
import clearIcon from './assets/clear.png';  
import cloudIcon from './assets/cloud.png';   
import drizzleIcon from './assets/drizzle.png';  
import humidityIcon from './assets/humidity.png';  
import rainIcon from './assets/rain.png';  
import snowIcon from './assets/snow.png';  
import windIcon from './assets/wind.png';  


function App() {
  const [icon,setIcon] = useState(snowIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("Chennai");
  const [country, setCountry] = useState("IN");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  return (
    <>
     <div className="container">
       <Header/>
      <div className="input-container">
        <input type="text" className="cityInput" placeholder="Search City" />
        <div className="search-icon">
          <img src={searchIcon} alt="search" />
        </div>
      </div>
      <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind}/>
      <Footer/>
     </div>
    </>
  )
}

export default App

