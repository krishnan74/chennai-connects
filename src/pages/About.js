import React from "react";
import Layout from "../layout";

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col my-10">
        <h1 className="text-4xl font-bold text-center ">About Us</h1>
        <p className="text-lg text-center font-['Oswald']">Meet out team</p>
        <div className="flex justify-center gap-x-10 mt-10">
          <div className="border flex flex-col h-[400px] w-[300px] ">
            <img src="" alt="" height={200} width={300} />
            <div className="p-10">
              <p className="font-bold text-xl tracking-wide">Ivin Lawrence</p>
              <p className="">CEO</p>
              <p className="font-['Oswald'] text-sm font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quae, nemo, quod, voluptatibus dolorum repellendus
              </p>
            </div>
          </div>
          <div className="border flex flex-col h-[400px] w-[300px] ">
            <img src="" alt="" height={200} width={300} />
            <div className="p-10">
              <p className="font-bold text-xl tracking-wide">Ivin Lawrence</p>
              <p className="">CEO</p>
              <p className="font-['Oswald'] text-sm font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quae, nemo, quod, voluptatibus dolorum repellendus
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
