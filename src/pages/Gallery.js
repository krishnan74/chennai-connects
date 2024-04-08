import React from "react";
import Navbar from "../components/Navbar";
import "yet-another-react-lightbox/styles.css";
import "../App.css";
import PrizeGallery from "../components/PrizeGallery";
import StartGallery from "../components/StartGallery";
import Layout from "../layout";
import GallerySection from "../components/GallerySection";

const Gallery = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-5xl font-bold text-center mt-10">
          Start <span className="text-green-400">Point</span>
        </h1>
        <StartGallery />
        <div className="w-fit mx-auto my-2 px-2">
          <h1 className="text-5xl font-bold text-center mt-10">
            Prize <span className="text-green-400">Distribution</span>
          </h1>
        </div>
        <PrizeGallery />
      </div>

    </Layout>
  );
};

export default Gallery;
