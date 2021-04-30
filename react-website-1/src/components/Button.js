import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'
import {Link as Scroll} from "react-scroll"




export const Button=({
    onClick,
    className
})=>{
    
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
    
    if (className=="next") {

        
        return (

            <faArrowAltCircleRight   onClick={nextVideo}>
            </faArrowAltCircleRight>
        )
    }

    if (className=="previous") {
        
        return (

            <faArrowAltCircleLeft   onClick={previousVideo}>
            </faArrowAltCircleLeft>
        )
    }
    if (className=="ca3-scroll-down-link ca3-scroll-down-arrow") {
        
        return (

            <Scroll className="btn-mobile" to='cards'>
            <button className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon="">
            </button>
            </Scroll>
        )
    }
    else{
        return (
        
        <Scroll className="btn-mobile" to="cards">
        <button className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""  >
        </button>
        </Scroll>
    )}
    

}