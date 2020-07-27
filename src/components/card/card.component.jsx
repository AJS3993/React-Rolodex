import React from 'react';
import './card.styles.css'


export const Card = (props) => (
    <div className='card-container'>
        
        {/* generates pics based on id */}
        <img alt='m' 
        src={`https://robohash.org/${props.monster.id}?set=set5&size=180x180`} />
        <h2>{props.monster.name}</h2>
        <h4>{props.monster.company.bs}</h4>
        <p>{props.monster.email}</p>
    </div>
)