import React from "react";
import Layout from "../layout";
import backgroundImage from "../images/bg.jpg";
import "../App.css";

const Home = () => {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "88vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    color: "white",
  };

  return (
    <div>Home</div>
  )
}

export default Home;
