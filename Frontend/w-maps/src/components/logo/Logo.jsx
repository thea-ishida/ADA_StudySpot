import React from "react";
import "./logo.css";

const Logo = ({ size = 120 }) => {
    return (
        <div className="logoContainer">
            <img 
                src="/assets/logo.png" 
                alt="App Logo" 
                className="logo"
                style={{ width: `${size}px`, height: `${size}px` }} 
            />
        </div>
    );
};

export default Logo;
