import './App.css'
import {useState} from "react";


const App = () => {
  const [count,setCount] = useState(0);
  const [multiplier,setMultiplier] = useState(1);

  const updateCount = () => {
    setCount(count + multiplier);
  };

  const buyDoubleStuffed = () => {
    if(count >= 10){
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  };

  const buyPartyPack = () => {
    if(count >= 100){
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1><title>Samosa Selector</title></h1>
        <h2>Count: {count}</h2>
        <img src="../public/samosa.jfif" alt="" className="samosa" onClick={updateCount}/>
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Upgrade 1</h3>
          <p>Upgrade the multiplier to x2</p>
          <button onClick={buyDoubleStuffed}>Upgrade</button>
        </div>
        <div className="upgrade">
          <h3>Upgrade 2</h3>
          <p>Upgrade the multiplier to x5</p>
          <button onClick={buyPartyPack}>Upgrade</button>
        </div>
      </div>
    </div>
  )
}
export default App
