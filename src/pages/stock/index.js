import React from 'react'

const Stock = (props) => {
  console.log(props.price);
  
    return (
    <div>
     <h1>{props.symbol}</h1>
    </div>
  )
}

export default Stock
