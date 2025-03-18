import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    //  Redirect to login if not authenticated
    if (localStorage.getItem("isAuthenticated") !== "true") {
      navigate("/");
    }
  }, []);

  return (
    <div className="main-container">
      <h1>Welcome to the Main Screen!</h1>
      <p>You are successfully logged in.</p>
    </div>
  );
};

export default MainScreen;
