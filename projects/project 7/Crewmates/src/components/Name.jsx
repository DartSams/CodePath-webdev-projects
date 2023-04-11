import { useState } from 'react'
import '../Name.css'

function Name(){
    const [name, setName] = useState();

    function getData(){
        let n = document.querySelector("#crew-name")
        setName(n)
    }


    return (
        <div id="name-container">
            <h2>Name: {name}</h2>
            <input type="text" placeholder='Enter your crewmates name:' id="crew-name"/>
            {/* <button onClick={getData}>Create</button> */}
        </div>
    )
}

export default Name;