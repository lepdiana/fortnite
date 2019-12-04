import React from 'react'

import '../style/about.css'

const About = props => {
    return(
        <div className='aboutSectionBlue'>
            <div className='aboutSectionWhite'>
                <h1>About</h1>
                <div className='aboutImageSection'>
                    <img src='https://2018media.idtech.com/legacy/blog/content/2018/04/Fortnite-5.jpg' alt='fortnite pc' className='aboutImage'/>
                </div>
                <p>Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite: Save the World, a cooperative shooter-survival game for up to four players to fight off zombie-like creatures and defend objects with fortifications they can build; Fortnite Battle Royale, a free-to-play battle royale game where up to 100 players fight to be the last person standing; and Fortnite Creative, where players are given complete freedom to create worlds and battle arenas. The first two-game modes were released in 2017 as early access titles and Creative was released on December 6, 2018. Save the World is available only for Windows, macOS, PlayStation 4, and Xbox One, while Battle Royale released for those platforms, in addition for Nintendo Switch, iOS and Android devices.</p>
                <br/>
                <br/>
                <p>While the first two games have been successful for Epic Games, Fortnite Battle Royale became a resounding success, drawing in more than 125 million players in less than a year and earning hundreds of millions of dollars per month, and since has become a cultural phenomenon. </p>
            </div>
        </div>
    )
}

export default About