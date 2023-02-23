import stocks from "./data.js"
import './App.css';
import { Outlet } from "react-router-dom";
import { useState } from "react";
function App() {
  
  
  console.log(stocks[0]);
  
  const [activeStock, setActiveStock] = useState();
  console.log(activeStock);
  const testFunction = async () => {
    const response = await  fetch('/test_route');
    
  }
  testFunction()
  return (
    <div className="App">
      <Outlet context={{activeStock, setActiveStock}}/>
    </div>
  );
}

export default App;