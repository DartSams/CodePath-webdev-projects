import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [cityName, setCityName] = useState()
  const [currentTime, setTime] = useState()
  const [state, setState] = useState()
  const api_key="03cb1168901d4f5cb931c02849ffa742"

  async function getData(url){
    const response = await fetch(url,{
      method:"GET",
      // headers:{
      //   "key":api_key,

      // },
      
    })
    return response.json()
  }

  function generate(){
    let newState = document.querySelector("#new-current-place").value
    let newCountry = document.querySelector("#new-country").value
    getData(`https://api.weatherbit.io/v2.0/current?country=${newCountry}&key=${api_key}&city=${newState}`)
    .then((data)=>{
      console.log(data.data[0])
      let dataRecieved = data.data[0]
      let weather = dataRecieved.weather
      // setCityName(dataRecieved.city_name)
      document.querySelector("#current-place-title").innerText = dataRecieved.city_name
      document.querySelector("#current-time").innerText = dataRecieved.datetime
      document.querySelector("#country-code").innerText = `Country Code: ${dataRecieved.country_code}`
      document.querySelector("#dew-point").innerText = `Dew Point: ${dataRecieved.dewpt}`
      document.querySelector("#weather-description").innerText = `Current Weather: ${weather.description}`
    })
  }

  return (
    <div id="container">
      <div id="sidebar">

      </div>
      <div id="main-content">
        
        <div id="main-header">
          <div id="current-place-container">
              <h1 id="current-place-title"></h1>
              <p>Enter city name below</p>
              <input type="text" id="new-current-place" placeholder='Raliegh'/>
              <input type="text" id="new-country" placeholder='US'/>
          </div>
          <div id="current-time-container">
              <h1 id="current-time"></h1>
          </div>
        </div>
        <div id="main-body">
          <div id="body-data">
            <h3 id="country-code"></h3>
            <h3 id="dew-point"></h3>
            <h3 id="weather-description"></h3>
          </div>
          <button onClick={generate}>Click here</button>
        </div>
      </div>
    </div>
  )

}

export default App
