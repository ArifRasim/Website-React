import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <div className="cards__container" id="cards">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem
                    src="images/spring-home.jpg"
                    text="Spring, also known as springtime, is one of the four temperate seasons, succeeding winter and preceding summer. There are various technical definitions of spring, but local usage of the term varies according to local climate, cultures and customs."
                    label="Spring"
                    path="/spring"
                    />
                    <CardItem
                    src="images/summer-home.jpg"
                    text="Summer timing The meteorological convention is to define summer as comprising the months of June, July, and August in the northern hemisphere and the months of December, January, and February in the southern hemisphere."
                    label="Summer"
                    path="/summer"
                    />
                    
                    </ul>
                    <ul className="cards__items">
                    <CardItem
                    src="images/autumn-home.jpg"
                    text="Autumn, season of the year between summer and winter during which temperatures gradually decrease. It is often called fall in the United States because leaves fall from the trees at that time."
                    label="Autumn"
                    path="/autumn"
                    />
                    <CardItem
                    src="images/winter-home.jpg"
                    text="Winter is the coldest season of the year in polar and temperate zones; it does not occur in most of the tropical zone. It occurs after autumn and before spring in each year. Winter is caused by the axis of the Earth in that hemisphere being oriented away from the Sun."
                    label="Winter"
                    path="/winter"
                    />
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
