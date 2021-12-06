import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <div className="header">Home</div>
      <div className="body">
        <button onClick={logout}>Sair</button>
      </div>
    </div>
  );
};

export default Home;
