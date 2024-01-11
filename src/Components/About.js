import React from "react";
import loan from "../image/loan.jpg";
const About = () => {
  return (
    <div className="about">
      <h1>About me</h1>
      {/* <img
        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
        alt="profile"
      /> */}
<img src={loan} alt="wealth"/>
      <p>
        Hello! I am Shivam Patidar, a recent graduate with a Bachelor's degree
        in Electronics and Communication from Prestige Institute of Engineering
        Management Research. My educational background has equipped me with a
        solid foundation in technology and communication. Currently, I am
        passionately delving into the world of Full Stack Development through a
        comprehensive course at AccioJob. I am enthusiastic about leveraging my
        skills and knowledge to contribute meaningfully to the field of
        technology. With a keen interest in coding and a determination to excel
        in the ever-evolving tech industry, I am on a journey to expand my
        horizons and make a positive impact through innovation.Embarking on an
        entrepreneurial journey, I have had the privilege of working with SME
        startups, where I gained invaluable experience in navigating the dynamic
        landscape of business innovation. My ventures in entrepreneurship have
        not only honed my leadership skills but have also instilled in me a
        profound understanding of the challenges and opportunities that come
        with establishing and growing a business. Collaborating with SME
        startups has provided me with firsthand insights into the agility
        required to adapt to market trends, formulate effective strategies, and
        foster sustainable growth. These experiences have not only shaped my
        professional acumen but have also fueled my passion for contributing to
        the vibrant and ever-evolving startup ecosystem.
      </p>
    </div>
  );
};
export default About;
