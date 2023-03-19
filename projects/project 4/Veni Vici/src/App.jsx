import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let banlist = []

function App() {
  const api_key="live_rDsZHh3JCGiENeqEo64Y3Co5r3f7IAX5NRpYhOV7onxE6gQs4yEmUbW6TRNjPaFD"
  const [image, setImage] = useState();
  const [breed, setBreed] = useState();
  const [name, setName] = useState();
  const [lifeSpan, setLifeSpan] = useState();
  const [origin, setOrigin] = useState();


  async function getData(url){
    const response = await fetch(url,{
      method:"GET",
      headers:{
        "x-api-key":api_key,
        "sec-fetch-mode": "no-cors"

      },
      
    })
    return response.json()
  }
  
  
  function generate(){
    getData("https://api.thecatapi.com/v1/images/search?has_breeds=1")
    .then((data) =>{
      console.log(data[0])
      if (banlist.includes(data[0].breeds[0].origin)){
        generate()
        // 0 ++; 
        // return
        // alert("clone")
      }
      if (banlist.includes(data[0].breeds[0].id)){
        generate()
        // 0 ++;
        // return
      }
      if (banlist.includes(data[0].breeds[0].life_span)){
        generate()
        // 0 ++;
        // return
      }
      // let image = data[0].url
      setImage(data[0].url)
      setBreed(data[0].breeds[0].id)
      setName(data[0].breeds[0].name)
      setLifeSpan(data[0].breeds[0].life_span)
      setOrigin(data[0].breeds[0].origin)

      let previous = document.querySelector("#previous")
      let previousCat = document.createElement("div")
      let img = document.createElement("img")
      img.src = data[0].url
      let p = document.createElement("p")
      p.innerText = `A ${data[0].breeds[0].id} from ${data[0].breeds[0].origin}`
      previousCat.append(img)
      previousCat.append(p)
      previous.append(previousCat)
      
      // console.log(banlist)
    })
    document.querySelector("#breed").addEventListener("click",function(){
      console.log(this)
      banlist.push(this.innerText)
    })

    document.querySelector("#life-span").addEventListener("click",function(){
      console.log(this)
      banlist.push(this.innerText)
    })

    document.querySelector("#origin").addEventListener("click",function(){
      banlist.push(this.innerText)
    })
  }

  function addBan(){
    // console.log(x+y)
    document.querySelector("#ban-tags").innerHTML = ""
    let uniqueChars = [...new Set(banlist)];

    for(let i=0;i<uniqueChars.length;i++){
      let bans = document.querySelector("#ban-tags")
      let div = document.createElement("div")
      let button = document.createElement("button")
      button.innerText = uniqueChars[i]
      div.append(button)
      bans.append(div)
    }
  }

  return (
    <div id="body-container">
      <div id="previous">
        <h2>Previous</h2>
      </div>

      <div id="popupContainer">
        <div id="header">
          <h1>Veni Vici</h1>
        </div>

        <div id="body">
          <h3 id="name">{name}</h3>

          <div id="cat-attributes">
            <button id="breed" onClick={()=>{addBan()}}>{breed}</button>
            <button id="life-span" onClick={()=>{addBan()}}>{lifeSpan}</button>
            <button id="origin" onClick={()=>{addBan()}}>{origin}</button>
          </div>

          <img src={image} alt="" />
        </div>

        <div id="footer">
          <button id="new-cat" onClick={generate}>Randomize</button>
        </div>
      </div>  

      <div id="ban-list">
          <h2>Ban List</h2>
          <div id="ban-tags">

          </div>
      </div>
    </div>
  )
}

export default App;