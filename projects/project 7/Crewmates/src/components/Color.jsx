import { useState } from 'react'
import '../Color.css'

function Color(){
    return (
        <div id="color-container">
            <h2>Color:</h2>
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
            </div>
        </div>
    )
}

export default Color;