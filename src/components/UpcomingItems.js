import React from 'react'
import UpcomingItem from './UpcomingItem.js'

import '../style/upcomingItems.css'

const UpcomingItems = props => {
    console.log(props.upcomingItems)
    const mappedUpcomingItems = props.upcomingItems.map(item => <UpcomingItem 
                                                                    name={item.item.name}
                                                                    description={item.item.description}
                                                                    rarity={item.item.rarity}
                                                                    type={item.item.type}
                                                                    const={item.item.cost}
                                                                    image={item.item.images.background}
                                                                    key={item.itemId}
                                                                />)

    return(
        <div className='popularContainer'>
            {mappedUpcomingItems}
        </div>
    )
}

export default UpcomingItems