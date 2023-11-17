import React from "react";
import "./Card.css";
import ProgressBar from "./ProgressBar";

function Card() {
    return (
        <div className="card">
            <h1>How it works</h1>
            <p>Get anything delivered easily, in minutes.</p>
        <div className="card-body">
            <div className="column">
                <img src="images/find.png" alt="find" />
            </div>
            <div className="column">
                <img src="images/track.png" alt="order" />
            </div>
            <div className="column">
                <img src="images/delivered.png" alt="order" />
            </div>
        </div>
        <div className="progressbar">
                <ProgressBar />
                </div>
            <div className="text-1">
            <div className="text-column">
                <h5>Get the app.</h5>
                <p>Set your pickup location and drop-off, review your order, choose payment method and wait for one of our rider to arrive.</p>
            </div>
            <div className="text-column">
                <h5>Track your package.</h5>
                <p>Enter the package ID issued to you after you place your order and watch the location of your package in real time.</p>
            </div>
            <div className="text-column">
                <h5>Confirm package is delivered</h5>
                <p>Review and confirm if your package is delivered in good conditions. Rate your experience and come back</p>
            </div>
            </div>
            <div className="download">
                <img src="images/Button.png" alt="download" />
                <img src="images/Button2.png" alt="download" />
            </div>
        </div>
        
    );
}

export default Card;