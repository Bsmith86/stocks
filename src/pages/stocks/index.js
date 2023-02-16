import React from 'react'
import data from "../../data"
import {useState} from "react"
import Card from '../../components/cards'
import Price from '../../components/price'
import Change from '../../components/stock'
import './index.css'

const Dashboard = () => {
  
  

   const [stocks, setStocks] = useState([])
  

   


   const companyJSX = () => {
    let stock = data.map((item) => {
      return <Card key={item.symbol} stock={item.name} symbol={item.symbol} lastPrice={item.lastPrice} change={item.change}/>
    })
    return stock;
  }
   const priceJSX = () => {
    let stock = data.map((item) => {
      return <Price key={item.symbol} lastPrice={item.lastPrice} />
    })
    return stock;
  }
   const changeJSX = () => {
    let stock = data.map((item) => {
      return <Change key={item.symbol} change={item.change}/>
    })
    return stock;
  }


    return (
    <div>
      <h1>Most Active Stocks</h1>
      <section className='header'>
        <h2>Company</h2>
        <h2>Price</h2>
        <h2>Change</h2>
      </section>
      <div className='flex-container'>
        <div className='company'>{companyJSX()}</div>
        <div className='price'>{priceJSX()}</div>
        <div className='change'>{changeJSX()}</div>
      </div>
      
    </div>
  )
}

export default Dashboard
