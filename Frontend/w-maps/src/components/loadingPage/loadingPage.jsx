import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import "./loadingPage.css";
import logo from "/assets/logo.png"; // import the logo component 

const LoadingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/login", { replace: false });
        }, 4000); // Navigate after 3 seconds

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="loadingPage">
            <div className="logoContainer">
                <img src={logo} alt="Logo" className="logo" />
            </div>
        </div>
    );
};

export default LoadingPage;
