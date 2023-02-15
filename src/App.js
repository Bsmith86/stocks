import stocks from "./data.js"
import './App.css';
import Dashboard from "./pages/stocks/index.js";

function App() {
  
  
  console.log(stocks[0]);
  
  
  const testFunction = async () => {
    const response = await  fetch('/test_route');
    
  }
  testFunction()
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;