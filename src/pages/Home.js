import React from "react";
import Layout from "../layout";
import backgroundImage from "../images/bg.jpg";
import fabricImage from "../images/green-fabric1.jpg";
import "./css/home.css";
import Gallery from "./Gallery";
import GallerySection from "../components/GallerySection";

const Home = () => {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    color: "white",
  };

  const galleryStyles = {
    backgroundImage: `url(${fabricImage})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  };

  return (
    <Layout>
      <div
        className="heroSection h-fit md:h-fit sm:h-[70vh] pb-10 "
        style={styles}
      >
        <h1 className="text-6xl text-center sm:text-[90px]  font-bold tracking-wider z-10 mt-20 italic ">
          Race to the <span className=" text-green-400">Future</span> Now
        </h1>
        <p className="w-[70%] min-w-[300px] z-10 font-['Oswald'] text-center text-lg tracking-wide sm:text-xl mt-5 ">
          <span className="text-green-400">Chennai Connects</span> is a dynamic
          event management startup dedicated to organizing diverse and engaging
          events in the vibrant city of Chennai. From exhilarating marathons and
          thrilling sports competitions to lively and fun-filled gatherings, we
          specialize in creating memorable experiences for participants and
          spectators alike.
        </p>
        <button className="mt-10 button_slide slide_right z-10 hover:text-black px-10 py-3 tracking-wide ">
          Let's Connect
        </button>
      </div>
      <div className="gallery-style" style={galleryStyles}>
        <h1 className="text-5xl font-bold text-center mt-20">
          Our <span className="text-green-400">Events</span>
        </h1>
        <GallerySection />
      </div>
    </Layout>
  );
};

export default Home;
