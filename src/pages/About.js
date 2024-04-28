import React from "react";
import Layout from "../layout";

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col my-10">
        <h1 className="text-4xl font-bold text-center ">About Us</h1>
        <p className="text-lg text-center font-['Oswald']">Meet out team</p>
        <div className="flex justify-center gap-x-10 mt-10">
          <div className="border flex flex-col h-[400px] w-[30%] ">
            {/* <img src="" alt="" height={200} width={300} /> */}
            <div className="p-10">
              <p className="font-bold text-xl tracking-wide">Ivin Lawrence</p>
              <p className="text-lg">CEO</p>
              <p className="font-['Oswald'] text-md font-light">
                As a seasoned badminton player and dedicated athlete, Ivin
                Lawrence infuses Chennai Connects with his unwavering passion
                for sports. Firmly rooted in the belief that sports can enact
                profound transformation, Ivin is wholeheartedly committed to
                guiding Chennai Connects in cultivating a dynamic sports culture
                while delivering top-tier event management services. Join Ivin
                on this exhilarating journey as we come together through sports,
                igniting inspiration and fostering greatness as one cohesive
                community.
              </p>
            </div>
          </div>
          <div className="border flex flex-col h-[400px] w-[30%] ">
            {/* <img src="" alt="" height={200} width={300} /> */}
            <div className="p-10">
              <p className="font-bold text-xl tracking-wide">D. Krishnaswamy</p>
              <p className="text-lg">CEO</p>
              <p className="font-['Oswald'] text-md font-light">
                D. Krishnaswamy is a dedicated second-year B.Com General student
                at Vels University, Chennai. Beyond academics, Krishnaswamy is a
                formidable athlete, excelling in both badminton and volleyball.
                As a state-level player in badminton, he brings exceptional
                skill and passion to the court, representing Vels University
                with pride. His achievements extend to volleyball, where he has
                clinched medals at the state level, showcasing his versatility
                and sportsmanship. In addition to his athletic pursuits,
                Krishnaswamy also serves as a badminton coach for both kids and
                adults, sharing his expertise and love for the game with others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
