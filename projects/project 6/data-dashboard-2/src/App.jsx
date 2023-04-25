// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Trend from 'react-trend';


// function App() {
//   const [count, setCount] = useState(0)
//   const [cityName, setCityName] = useState()
//   const [currentTime, setTime] = useState()
//   const [state, setState] = useState()
//   const [data, setData] = useState([0,0,0,0])
//   const api_key="03cb1168901d4f5cb931c02849ffa742"
//   // let d = [0,0,0,0]
//   async function getData(url){
//     const response = await fetch(url,{
//       method:"GET",
//       // headers:{
//       //   "key":api_key,

//       // },
      
//     })
//     return response.json()
//   }

//   async function getHistoryData(url){
//     const response = await fetch(url,{
//       method:"GET"
//     })
//     return response.json()
//   }

//   function generate(){
//     let newState = document.querySelector("#new-current-place").value
//     let newCountry = document.querySelector("#new-country").value
//     getData(`https://api.weatherbit.io/v2.0/current?country=${newCountry}&key=${api_key}&city=${newState}`)
//     .then((data)=>{
//       console.log(data.data[0])
//       let dataRecieved = data.data[0]
//       let weather = dataRecieved.weather
//       // setCityName(dataRecieved.city_name)
//       document.querySelector("#current-place-title").innerText = dataRecieved.city_name
//       document.querySelector("#current-time").innerText = dataRecieved.datetime
//       document.querySelector("#country-code").innerText = `Country Code: ${dataRecieved.country_code}`
//       document.querySelector("#dew-point").innerText = `Dew Point: ${dataRecieved.dewpt}`
//       document.querySelector("#weather-description").innerText = `Current Weather: ${weather.description}`
//     })

//     let startDate = document.querySelector("#start-date").value
//     let endDate = document.querySelector("#end-date").value

//     getHistoryData(`http://api.weatherbit.io/v2.0/history/daily?country=${newCountry}&key=${api_key}&city=${newState}&start_date=${startDate}&end_date=${endDate}`)
//     .then((data)=>{
//       // console.log()
//       let historyData = data.data
//       console.log(historyData)
//       let d = {
//         labels: ["clouds","dewpoint","max temperature","wind speed"],
//         datasets:[{
//           // labels:"Previous weather data",
//           data:[historyData.clouds,historyData.dewpt,historyData.max_temp,historyData.wind_spd],
//           // backgroundColor:"aqua",
//           // borderColor:'black',
//           // pointBorderColor:"aqua",
  
//         }]
//       }
//       setData([historyData.clouds,historyData.dewpt,historyData.max_temp,historyData.wind_spd])

//       // let chart = document.createElement("Line")
//       // chart.data = d
//       // document.querySelector("#container").append(chart)
//     })
//   }

//   return (
//     <div id="container">
//       <div id="sidebar">

//       </div>
//       <div id="main-content">
        
//         <div id="main-header">
//           <div id="current-place-container">
//               <h1 id="current-place-title"></h1>
//               <p>Enter city name below</p>
//               <input type="text" id="new-current-place" placeholder='Raliegh'/>
//               <input type="text" id="new-country" placeholder='US'/>
//           </div>
//           <div id="current-time-container">
//               <h1>Current Time</h1>
//               <p id="current-time"></p>
//           </div>
//           <div id="time-range-container">
//             <h1>Enter start-end date below</h1>
//             <input type="text" id="start-date" placeholder='YYYY-MM-DD'/>
//             <input type="text" id="end-date" placeholder='YYYY-MM-DD'/>
//           </div>
//         </div>
//         <div id="main-body">
//           <div id="body-data">
//             <h3 id="country-code"></h3>
//             <h3 id="dew-point"></h3>
//             <h3 id="weather-description"></h3>
//           </div>
//           <button onClick={generate}>Click here</button>
//         </div>
//       </div>

//       <Trend
//         smooth
//         autoDraw
//         autoDrawDuration={3000}
//         autoDrawEasing="ease-out"
//         data={data}
//         gradient={['#00c6ff', '#F0F', '#FF0']}
//         radius={10}
//         strokeWidth={4}
//         strokeLinecap={'butt'}
//       />
//     </div>
    
//   )

// }

// export default App


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import { Line } from "react-chartjs-2";

const API_KEY = "03cb1168901d4f5cb931c02849ffa742"; // Replace with your API key
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/"; // OpenWeatherMap API base URL

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `${API_BASE_URL}onecall?lat=37.7749&lon=-122.4194&exclude=current,minutely,hourly&appid=${API_KEY}`
        );
        setWeatherData(res.data.daily);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const chartData = {
    labels: weatherData.map((data) => {
      const date = new Date(data.dt * 1000);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    }),
    datasets: [
      {
        label: "Temperature",
        data: weatherData.map((data) => data.temp.day),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        lineTension: 0.1,
      },
    ],
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/:id">
            <Detail weatherData={weatherData} />
          </Route>
          <Route path="/">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <div>
                <h1>Weather Data Dashboard</h1>
                <Line data={chartData} />
                <ul>
                  {weatherData.map((data, index) => (
                    <li key={index}>
                      <Link to={`/${index}`}>{`Date: ${new Date(
                        data.dt * 1000
                      ).toLocaleDateString()}`}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Detail({ weatherData }) {
  const { id } = useParams();
  const data = weatherData[id];
  const date = new Date(data.dt * 1000);
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  return (
    <div>
      <h2>Detail View</h2>
      <p>{`Date: ${formattedDate}`}</p>
      <p>{`Temperature: ${data.temp.day} K`}</p>
      <p>{`Humidity: ${data.humidity} %`}</p>
      <p>{`Pressure: ${data.pressure} hPa`}</p>
    </div>
  );
}

export default App;
