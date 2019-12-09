import React from 'react'
import Product from './Product.js'

import '../style/products.css'


const Products = props => {
    return (
        <div className='mainContainer'>
            <div className='typeOfProductsContainer'>
                <div className='typeOfProductsTitleSection'>
                    <p className='typeOfProductsTitle'>Types of Products:</p>
                </div>
                <div className='buttonSection'>
                    <button onClick={ props.removeFilter }>All</button>
                    <button onClick={() => props.getByType('backpack')}>Backpack</button>
                    <button onClick={() => props.getByType('contrail')}>Contrail</button>
                    <button onClick={() => props.getByType('emoji')}>Emoji</button>
                    <button onClick={() => props.getByType('emote')}>Emote</button>
                    <button onClick={() => props.getByType('glider')}>Glider</button>
                    <button onClick={() => props.getByType('loadingscreen')}>Loading Screen</button>
                    <button onClick={() => props.getByType('outfit')}> Outfit</button>
                    <button onClick={() => props.getByType('pet')}>Pet</button>
                    <button onClick={() => props.getByType('pickaxe')}>Pickaxe</button>
                    <button onClick={() => props.getByType('spray')}>Spray</button>
                    <button onClick={() => props.getByType('toy')}>Toy</button>
                    <button onClick={() => props.getByType('wrap')}>Wrap</button>
                </div>
            </div>
            <div className='productsSection'>
                <Product props={props}/>
            </div>
        </div>
    )
}

export default Products