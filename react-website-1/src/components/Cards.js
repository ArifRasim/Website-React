import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
        <h1>ggggggggggggggggggggggggggggggggggggggg</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem
                    src="images/img-1.jpg"
                    text="Exploreeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeee"
                    label="Adventure"
                    path="/services"
                    />
                    <CardItem
                    src="images/img-2.jpg"
                    text="Thissssssssssssssssssssssssssssss
                    as"
                    label="Adventure"
                    path="/services"
                    />
                    
                    </ul>
                    <ul className="cards__items">
                    <CardItem
                    src="images/img-4.jpg"
                    text="Explore"
                    label="Adventure"
                    path="/services"
                    />
                    <CardItem
                    src="images/img-5.jpg"
                    text="This"
                    label="Adventure"
                    path="/services"
                    />
                    <CardItem
                    src="images/img-6.jpg"
                    text="Third"
                    label="Adventure"
                    path="/services"
                    />
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
