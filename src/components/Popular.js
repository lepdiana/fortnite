import React from 'react'

const Popular = props => {
    return(
        <div className='popularProductsSection'>
            <h1>{props.name}</h1>
            <p>Description: {props.description}</p>
            <p>Rarity: {props.rarity}</p>
            <p>Cost: {props.const} vbucks</p>
            <p>Ratings:</p>
            <ul>
                <li>Average Stars - {props.avgStars}</li>
                <li>Number of Votes - {props.numberVotes}</li>
                <li>Total Points - {props.totalPoints}</li>
            </ul>
            <img src={props.image} alt={props.name}/>
        </div>
    )
}

export default Popular