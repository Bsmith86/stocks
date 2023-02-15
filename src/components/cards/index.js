import React from 'react'
import data from "../../data.js"
import {useState} from 'react'
import './index.css'

const Card = (props) => {

   
  return (
    <div className='stocks'>
      <h2 className='company'>{props.stock} ({props.symbol})</h2>
      {/* <h2 className='price'>{props.lastPrice}</h2>
      <h2 className='change'>{props.change}</h2> */}
    </div>
  )
}

export default Card
