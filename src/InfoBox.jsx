import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function InfoBox({info}) {
    const INIT_URL="https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"


    const HOT_URL="https://images.unsplash.com/photo-1581129724980-2ab2153c3d8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SE9UJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1631315124498-41ebb8b10ede?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENPTEQlMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    const RAIN_URL="https://images.unsplash.com/photo-1508697014387-db70aad34f4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFJBSU4lMjB3ZWF0aGVyfGVufDB8fDB8fHww"

    
  return (
    <div className='InfoBox'>
        {/* <h1>WeatherInfo-{Info.weather}</h1> */}
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity>80? RAIN_URL:(info.temp>15)?HOT_URL:COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}&nbsp;{
            info.humidity>80?<ThunderstormIcon/>:info.temp>15?<AcUnitIcon/>:<WbSunnyIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'}} component={"span"}>  
          <p>Temperature = {info.temp}&deg;C</p> 
          <p>Humidity = {info.humidity}</p>
          <p>Min temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>the weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>

        </Typography>
      </CardContent>
    </Card>  
    </div>
  )
}

export default InfoBox          