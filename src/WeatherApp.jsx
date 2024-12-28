import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'


function WeatherApp() {
    const [weatherinfo,setWeatherinfo]=useState({
        city:"Delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });
    let updateInfo=(newInfo)=>{
        setWeatherinfo(newInfo)
    }
  return (
    <div>
        {/* <h2>Weather App by Delta</h2> */}
        <SearchBox updateInfo={updateInfo}/><br/>
        <InfoBox info={weatherinfo}/>
    </div>
  )
}

export default WeatherApp