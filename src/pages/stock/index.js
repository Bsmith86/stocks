
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { companyJSX } from '../stocks/index'
import { useOutletContext } from "react-router-dom";

const Stock = (props) => {
 console.log('context');
 console.log(useOutletContext())
    let {activeStock, setActiveStock } =  useOutletContext();
    // const [stockData, setStockData] = useState(null)
    let price 
    if (activeStock) {
      price = activeStock.lastPrice 
     }
    // let price 
    // if (activeStock) {
    //   price = activeStock.lastPrice 
    //  }
    // let price 
    // if (activeStock) {
    //   price = activeStock.lastPrice 
    //  }
    // let price 
    // if (activeStock) {
    //   price = activeStock.lastPrice 
    //  }
    // let price 
    // if (activeStock) {
    //   price = activeStock.lastPrice 
    //  }
    
  console.log(activeStock);


  
    // useRef > variable that will hold its value between renders 
    // let isFirstRender = useRef(true);
    // useEffect(() => {
    //   console.log("running useEffect");

    //   const makeCall = async () => {
    //       let response = await (ActiveStock)
    //     // console.log(response);
    //     // setStockData(response.data)

    //     // make call to exchange rate api, get that rate, then convert the data
        
    //     // display some of this data
    //     //set the state
    //   }
    //   if (isFirstRender.current) {
    //     console.log("Making call!");
    //     // CALL HERE 
    //     makeCall()
    //     isFirstRender.current = false;
    //   }
    // }, []);



    // [] means run function on FIRST render
    // [selectedCoin] means run the on FIRST RENDER AND anytime selectedCoin changes value

  // how to get that param value
  return (
    <div className='page-container'>
      <h1>{activeStock.stock}</h1>
      <div>
        
      </div>
      {activeStock === null ? <div>loading...</div> : <div>Current Price: {price}, Open Price: {activeStock.open}, Low: {activeStock.low}, High: {activeStock.high}, Change: {activeStock.change}</div>}
    </div>
  )
}

export default Stock
