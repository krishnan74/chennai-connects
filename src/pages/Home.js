import React from "react";
import Layout from "../layout";
import backgroundImage from "../images/bg.jpg";
import "../App.css";
import Gallery from "./Gallery";
import GallerySection from "../components/GallerySection";

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
    <Layout>
      <div className="heroSection" style={styles}>
        <h1 className="text-[90px] font-bold tracking-wider z-10 mt-20 italic">
          Race to the <span className=" text-green-400">Future</span> Now
        </h1>
      </div>
      <GallerySection/>
    </Layout>
  );
}

export default Home;
