import React from 'react'
import Product from './Product.js'

import '../style/products.css'


const Products = rProps => {
    console.log(rProps.products)
    console.log(rProps.filteredProducts)
    return (
        <div className='mainContainer'>
            <div className='typeOfProductsContainer'>
                <div className='typeOfProductsTitleSection'>
                    <p className='typeOfProductsTitle'>Types of Products:</p>
                </div>
                <div className='buttonSection'>
                    <button onClick={ rProps.removeFilter }>All</button>
                    <button onClick={() => rProps.getByType('backpack')}>Backpack</button>
                    <button onClick={() => rProps.getByType('bundle')}>Bundle</button>
                    <button onClick={() => rProps.getByType('emote')}>Emote</button>
                    <button onClick={() => rProps.getByType('glider')}>Glider</button>
                    <button onClick={() => rProps.getByType('outfit')}> Outfit</button>
                    <button onClick={() => rProps.getByType('pet')}>Pet</button>
                    <button onClick={() => rProps.getByType('pickaxe')}>Pickaxe</button>
                    <button onClick={() => rProps.getByType('skydive')}>Skydive</button>
                    <button onClick={() => rProps.getByType('spray')}>Spray</button>
                    <button onClick={() => rProps.getByType('toy')}>Toy</button>
                    <button onClick={() => rProps.getByType('wrap')}>Wrap</button>
                </div>
            </div>
            <div className='productsSection'>
                <Product rProps={rProps}/>
            </div>
        </div>
    )
}

export default Products