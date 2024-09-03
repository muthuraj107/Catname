import React from 'react';
import './Card-list.css'
import { Card } from '../Card/Card';
export const CardList =(props)=>{
    return (
      <div className="cardlist">
        {props.Name.map((user) => (
            <Card key={user.id} user={user}/>
        ))}
      </div>
    );
}