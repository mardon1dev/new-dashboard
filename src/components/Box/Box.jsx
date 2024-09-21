import React from 'react'

import "./box.css"

const Box = ({style, item}) => {
  return (
    <div className={style}>
        <p>{item.type}</p>
        <span>{item.count}</span>
    </div>
  )
}

export default Box