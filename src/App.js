import stocks from "./data.js"
import './App.css';
import { Outlet } from "react-router-dom";
function App() {
  
  
  console.log(stocks[0]);
  
  
  const testFunction = async () => {
    const response = await  fetch('/test_route');
    
  }
  testFunction()
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;