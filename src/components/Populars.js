import React from 'react'
import Popular from './Popular.js'

import '../style/populars.css'

const Populars = (rProps) => {
    const mappedPopular = rProps.mappedPopulars.map(onePop => <Popular 
                                                                    name={onePop.props.name}
                                                                    description={onePop.props.description}
                                                                    rarity={onePop.props.rarity}
                                                                    avgStars={onePop.props.ratings.avgStars}
                                                                    numberVotes={onePop.props.ratings.numberVotes}
                                                                    totalPoints={onePop.props.ratings.totalPoints}
                                                                    const={onePop.props.cost}
                                                                    image={onePop.props.images.transparent}
                                                                    key={onePop.props.identifier}
                                                                />)

    return(
        <div className='popularContainer'>
            {mappedPopular}
        </div>
    )
}

export default Populars