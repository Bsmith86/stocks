import React from 'react'
import data from "../../data.js"
import {useState} from 'react'
import './index.css'
import { useNavigate } from "react-router-dom";

const Card = (props) => {

  const navigate = useNavigate();

  const handleClick = (props) => {
    console.log('handle click executing, we have the symbol of what was clicked');
    console.log(props);
    // OPTION 1
    navigate(`/stock/{props}`)
    // Manually switch pages to coin/symbolOfItem
  }
   
  return (
    <div className='stocks'>
      <h2 onClick={() => handleClick(props)} className='company'>{props.stock} ({props.symbol})</h2>
      {/* <h2 className='price'>{props.lastPrice}</h2>
      <h2 className='change'>{props.change}</h2> */}
    </div>
  )
}

export default Card
