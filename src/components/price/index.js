import React from 'react'
import data from "../../data.js"
import {useState} from 'react'
import './index.css'

const Price = (props) => {

   
  return (
    <div className='stocks'>
      <h2 className='price'>${props.lastPrice}</h2>
    </div>
  )
}

export default Price
