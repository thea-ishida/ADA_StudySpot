import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./loadingPage.css";

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    //  Redirect to Main Screen after 3 seconds
    const timer = setTimeout(() => {
      navigate("/main");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-container">
      <h1>Loading...</h1>
      <p>Please wait while we set things up.</p>
    </div>
  );
};

export default LoadingPage;
