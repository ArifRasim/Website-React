import React from 'react'
import "./HeroSection.css"
import "../App.css"
import {Link as Scroll} from "react-scroll"

import {FaArrowAltCircleRight,FaArrowAltCircleLeft,FaArrowAltCircleDown} from 'react-icons/fa'

function HeroSection() {
    function nextVideo(){

        if (document.getElementById("background").src=="http://localhost:3000/videos/spring.mp4") {
            
            return document.getElementById("background").src="./videos/summer.mp4"
            
        }
        if (document.getElementById("background").src=="http://localhost:3000/videos/summer.mp4") {
            
            return document.getElementById("background").src="./videos/autumn.mp4"
            
        }
        if (document.getElementById("background").src=="http://localhost:3000/videos/autumn.mp4") {
            
            return document.getElementById("background").src="./videos/winter.mp4"
            
        }
        if (document.getElementById("background").src=="http://localhost:3000/videos/winter.mp4") {
            
            return document.getElementById("background").src="./videos/spring.mp4"
            
        }
    }

    function previousVideo(){

        if (document.getElementById("background").src=="http://localhost:3000/videos/spring.mp4") {
            
            return document.getElementById("background").src="./videos/winter.mp4"
            
        }
        if (document.getElementById("background").src=="http://localhost:3000/videos/summer.mp4") {
            
            return document.getElementById("background").src="./videos/spring.mp4"
            
        }
        if (document.getElementById("background").src=="http://localhost:3000/videos/autumn.mp4") {
            
            return document.getElementById("background").src="./videos/summer.mp4"
            
        }
        if (document.getElementById("background").src=="http://localhost:3000/videos/winter.mp4") {
            
            return document.getElementById("background").src="./videos/autumn.mp4"
            
        }
    }
    return (
        <div  className="hero-container">
            <video id="background" src="./videos/spring.mp4" autoPlay loop muted></video>
            <div className="hero-btns" >
            <Scroll onClick={nextVideo} className="next">
            <i className="fas fa-arrow-circle-right next" > </i>
            </Scroll>
            <Scroll onClick={previousVideo} className="previous">
            <i className="fas fa-arrow-circle-left previous" > </i>
            </Scroll>
            <Scroll className="btn-mobile" to="cards">
            <FaArrowAltCircleDown onClick={previousVideo} className="down"></FaArrowAltCircleDown>
            </Scroll>
            
            
            </div>
        </div>
        
    )
    
}
if (document.getElementById("next")){
document.getElementById("next").addEventListener('click',()=>{
    console.log(123);
})}
export default HeroSection
