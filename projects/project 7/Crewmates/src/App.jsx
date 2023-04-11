import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav.jsx'
import Name from './components/Name.jsx'
import Color from './components/Color.jsx'
import { supabase } from './client'

function App() {
  const [crewName, setName] = useState();
  const [crewColor, setColor] = useState();


  const [players, setPlayers] = useState([])
  const [player, setPlayer] = useState({name:"",color:""})
  const {name, color} = player

  function getData(){
    let inputName = document.querySelector("#crew-name").value
    setName(inputName)
    let ele = document.getElementsByName("color")
    for (let i=0;i< ele.length;i++){
        if(ele[i].type="radio") {
          if(ele[i].checked)
              setColor(ele[i].value)
        }
    }
    createPlayer(crewName,crewColor)
  } //loads data from components

  async function fetchPlayer(){
    const {data} = await supabase
      .from("ship")
      .select("*")
    setPlayers(data)
    console.log("data: ",data)
  } //get request to db

  async function createPlayer(){
    await supabase
      .from("ship")
      .insert(
        {name:name, color:color }
      )
      .single()
    setPlayer({name:"",color:""})
    fetchPlayer()
  }

  // document.querySelector("#crew-name").addEventListener("onchange",e => setPlayer({...player,name:e.target.value}))

  useEffect(()=>{
    fetchPlayer()
  },[]) //runs function when page finished loading
  
  return (
    <div id="content-container">
      <Nav />
      <h1>Create a new Createmate</h1>
      {/* <Name /> */}
      <div id="name-container">
          <h2>Name: {name}</h2>
          <input type="text" placeholder='Enter your crewmates name:' id="crew-name" onChange={e => setPlayer({...player,name:e.target.value})}/>
          {/* <button onClick={getData}>Create</button> */}
      </div>
      {/* <Color /> */}
      <div id="color-container">
        <input type="text" placeholder='red' id='crew-color' onChange={e=>setPlayer({...player,color:e.target.value})}/>
          {/* <h2>Color:</h2>
          <div>
              <input type="radio" id="html" name="color" value="red" />
              <label >Red</label>
          </div>
          <div>
              <input type="radio" id="css" name="color" value="blue" />
              <label >Blue</label>
          </div>
          <div>
              <input type="radio" id="javascript" name="color" value="yellow" />
              <label >Yellow</label>
          </div> */}
      </div>
      <button onClick={createPlayer}>Create</button>
      <h1>{crewName} - {crewColor}</h1>``
    </div>
  )
}

export default App;
