import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={props.eatSushi}>
        {props.isConsumed ? null : <img src={props.img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi
