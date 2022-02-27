import React from 'react'
import Header from '../Header/Header'
import Inclusion from '../Include/Inclusion'
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

            <div className="itinerary">
                <h2>Kedarnath Itinerary</h2>

                <div className="itinerary-content">
                    <div className="itinerary-left">
                        <div className="content-left left-image">
                            <img src="../assets/image1.jpg" alt="" />
                        </div>
                        <div className="content-left left-text">
                            <h4>Day1-Reach Gupkashi</h4>
                            <ul>
                                <li>Approx 14 hours of Journey to Guptkashi, (with multiple pit-stops)</li>
                                <li>We will Reach Guptkashi by noon.</li>
                                <li>On arrival at Guptkashi check-in hotel. Rest of the day at leisure. Overnight stay at hotel </li>
                            </ul>

                        </div>

                        <div className="content-left left-image">
                            <img src="../assets/image1.jpg" alt="" />
                        </div>
                        <div className="content-left left-text">
                            <h4>Day1-Reach Gupkashi</h4>
                            <ul>
                                <li>Approx 14 hours of Journey to Guptkashi, (with multiple pit-stops)</li>
                                <li>We will Reach Guptkashi by noon.</li>
                                <li>On arrival at Guptkashi check-in hotel. Rest of the day at leisure. Overnight stay at hotel </li>
                            </ul>

                        </div>

                        <div className="content-left left-image">
                            <img src="../assets/image1.jpg" alt="" />
                        </div>
                        
                    </div>
                    <div className="itinerary-middle">
                        <div className="circle">
                            <h3>1</h3>
                        </div>
                        <div className="line"></div>
                        <div className="circle">
                            <h3>1</h3>
                        </div>
                        <div className="line"></div>
                        <div className="circle">
                            <h3>1</h3>
                        </div>
                        <div className="line"></div>
                        <div className="circle">
                            <h3>1</h3>
                        </div>
                        <div className="line"></div>
                        <div className="circle">
                            <h3>1</h3>
                        </div>
                        <div className="line"></div>

                    </div>
                    <div className="itinerary-right">
                        <div className="content-left left-text">
                            <h4>Day1-Reach Gupkashi</h4>
                            <ul>
                                <li>Approx 14 hours of Journey to Guptkashi, (with multiple pit-stops)</li>
                                <li>We will Reach Guptkashi by noon.</li>
                                <li>On arrival at Guptkashi check-in hotel. Rest of the day at leisure. Overnight stay at hotel </li>
                            </ul>

                        </div>
                        <div className="content-left left-image">
                            <img src="../assets/image1.jpg" alt="" />
                        </div>

                        <div className="content-left left-text">
                            <h4>Day1-Reach Gupkashi</h4>
                            <ul>
                                <li>Approx 14 hours of Journey to Guptkashi, (with multiple pit-stops)</li>
                                <li>We will Reach Guptkashi by noon.</li>
                                <li>On arrival at Guptkashi check-in hotel. Rest of the day at leisure. Overnight stay at hotel </li>
                            </ul>

                        </div>
                        <div className="content-left left-image">
                            <img src="../assets/image1.jpg" alt="" />
                        </div>

                        <div className="content-left left-text">
                            <h4>Day1-Reach Gupkashi</h4>
                            <ul>
                                <li>Approx 14 hours of Journey to Guptkashi, (with multiple pit-stops)</li>
                                <li>We will Reach Guptkashi by noon.</li>
                                <li>On arrival at Guptkashi check-in hotel. Rest of the day at leisure. Overnight stay at hotel </li>
                            </ul>

                        </div>
                       
                        
                    </div>
                </div>

                
            </div>

            <Inclusion/>
        </div>
    )
}

export default Home