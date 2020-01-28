import React from 'react';
import {Card} from '../card/card.component.jsx'
import './card-list.styles.css'


// props here is used so the array of monsters can be passed in 
export const CardList = props =>  {
    console.log(props)
return <div className='card-list'>
    
    {/* receives array of monsters from app.js (passed as props) and passes them to the Card component 1 by 1 */}
    {props.monsters.map(monster => (
        <Card key ={monster.id} monster={monster}/>
    ))}
    
    </div>;
};