import React from 'react';
import './Card.css'
export const Card=(props)=>{
    return (
      <div className="cardcontainer">
        <img
          src={`https://robohash.org/set_set4/${props.user.id}&size=180x180`}
          alt=""
        />
        <h4>{props.user.name} </h4>
      </div>
    );
}