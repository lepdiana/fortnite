import React from 'react'

import '../style/product.css'

const Product = props => {
    const mappedFilteredProducts = props.rProps.filteredProducts.map(filteredProduct => 
                                                                        <div key={filteredProduct.itemId}>
                                                                            <h1>{filteredProduct.item.name}</h1>
                                                                            <p>Description: {filteredProduct.item.description}</p>
                                                                            <p>Rarity: {filteredProduct.item.rarity}</p>
                                                                            <p>Cost: {filteredProduct.item.cost} vbucks</p>
                                                                            <p>Type: {filteredProduct.item.type}</p>
                                                                            <img src={filteredProduct.item.images.background} alt={filteredProduct.name}/>
                                                                        </div>
                                                                    )

    return(
        <div className='eachProductSection'>
            {mappedFilteredProducts}
        </div>
    )
}

export default Product



                                                      