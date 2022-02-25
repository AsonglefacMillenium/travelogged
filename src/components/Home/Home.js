import React from 'react'
import Header from '../Header/Header'
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
        <div className="lander">
        <div className="lander-content">
        <div className="space"></div>
        <Header />

        <div className="lander-text">
            <h1>Travelogged Kerdanath <br /> 2022</h1>
            <h3>Visit the "SWARG" on Earth- The Mighty Kedarnath Temple this <br /> 2022.</h3>
            <div className="buttons">
                <button className="button-blue">
                <a href="" >BookNow</a>
                </button>
               <button className="button-white">
               <a href="" >Check Itinerary</a>
               </button>
            </div>
        </div>
        </div>
            
        </div>
    </div>
  )
}

export default Home