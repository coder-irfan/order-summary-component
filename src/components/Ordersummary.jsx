import React from "react";
import heroImage from "../images/illustration-hero.svg";
import musicIcon from "../images/icon-music.svg"

function Ordersummary() {
    return (
        <main className="main">
          <div className="container">
            <img src={heroImage} alt="Hero" className="hero-img" />
              <div className="content">
                <h1>
                  Order Summary
                </h1>

                <p className="text">
                  You can now listen to millions of songs, audiobooks, and podcasts on any 
                  device anywhere you like!
                </p>

                <div className="details">
                  <div className="info">
                    <img src={musicIcon} alt="music icon"/>
                    <div className="texts">
                      <p className="plan">Annual Plan</p>
                      <p className="value">$59.99/year</p>
                    </div>
                  </div>
                  
                  <a href="#" className="change-button">Change</a>
                </div>

                  <button className="proceed-btn">Proceed to Payment</button>
                  <a href="#" className="cancle-btn">Cancle Order</a>
              </div>
          </div>
        </main>
    )
}

export default Ordersummary;