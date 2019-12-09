import React from 'react'

function UpcomingItem(props) {
    const save = () => {
        localStorage.setItem("item", "Hello")
    }
    return(
        <div className='popularProductsSection'>
            <h1>{props.name}</h1>
            <p>Description: {props.description}</p>
            <p>Rarity: {props.rarity}</p>
            <p>Cost: {props.const} vbucks</p>
            <p>Type: {props.type}</p>
            <img src={props.image} alt={props.name}/>
            <button onClick={save}>Save</button>
        </div>
    )
}

export default UpcomingItem