import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import InfoBox from './InfoBox';
function SearchBox({updateInfo}) {
  const [city,setCity]=useState("");
  const [error,setError]=useState(false)
  // const API_URL="http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"
  const API_URL="http://api.openweathermap.org/data/2.5/weather";
  const API_KEY="3ef94ed0aada8c2aacfc674356b62ee2"
  let getWeatherInfo=async()=>{
    try{
      let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      let jsonResponse= await response.json()
      //console.log(jsonResponse);
      let result={
       city:city,
       temp:jsonResponse.main.temp,
       tempMin:jsonResponse.main.temp_min,
       tempMax:jsonResponse.main.temp_max,
       humidity:jsonResponse.main.humidity,
       feelsLike:jsonResponse.main.feels_like,
       weather:jsonResponse.weather[0].description
      }
      console.log(result)
      return result;
    }
    catch(err){
      throw err
    }
  }
  
    const HandelInput=(event)=>{
        setCity(event.target.value)
    }
    const HandleSubmit=async(evt)=>{
        try{
          evt.preventDefault()
        console.log(city)
        setCity("") 
        let newInfo=await getWeatherInfo()
        updateInfo(newInfo)
        }
        catch(err)
        {
          setError(true)
        }
    }
  return (
    <div className='SearchBox'>
        <h3>search for the weather</h3>
    <form onSubmit={HandleSubmit}>
    <TextField id="cityr" label="City Name?" variant="outlined" onChange={HandelInput} value={city} required /><br/><br/>
    <Button variant="contained" type='submit'>Search</Button>
    {error && <p style={{color:"red"}}>No such place in our API exists!</p>}
    </form>

    </div>
  )
}

export default SearchBox