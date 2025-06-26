import React from 'react'

const WeatherDetails = ({ icon, temp, city,country,lat,log }) => {
  return (
    <>
      <div className="image">
        <img src={icon} alt="Image" />
      </div>
      <div className="temp">{temp}°C</div>
      <div className="location">{city}</div>
      <div className="country">{country}</div>
      <div className="cord">
        <div>
            <span className="lat">Latitude</span>
            <span>{lat}</span>
        </div>
         <div>
            <span className="log">Longitude</span>
            <span>{log}</span>
        </div>
      </div>
    </>
  )
}

export default WeatherDetails
