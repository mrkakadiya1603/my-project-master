// import React, { useState } from "react";
// import eduImg from "../../../images/education-diplay.jpeg";

// import webDevImg from "../../../images/webDev_display.jpeg";
// import mobileDevImg from "../../../images/mobile_display.jpeg";
// import otherImg from "../../../images/other_display.jpeg";

// import {  useHistory } from "react-router-dom";

import "./Home.css";
// import ScrollDown from "../micro-components/Scrolldown";


const Home = () => {
  // const history = useHistory();
  // const displays = [
  //   {
  //     img: eduImg,
  //     title: "Education",
  //     desc: "\nSchool:\nUniversity of Alberta\n\n Degree:\nBachlor of Science\n\nMajor:\nComputer Science and Mathematics",
  //     href: "/portfolio#skill",
  //   },
  //   {
  //     img: webDevImg,
  //     title: "Web Development Projects",
  //     desc: "Checkout the full stack web development projects that I have written in frameworks like React/Redux, Express, Node and databases like MongoDB, Firebase, etc.",
  //     href: "/portfolio#webprj",
  //   },
  //   {
  //     img: mobileDevImg,
  //     title: "Mobile Development Projects",
  //     desc: "Checkout the mobile development project that I have written in Java.",
  //     href: "/portfolio#mobileprj",
  //   },
  //   {
  //     img: otherImg,
  //     title: "Other Projects",
  //     desc: "\n\n\n\nHere are some other porjects like Visual Recognition with DNN, small games using RPG Makaer, etc. that I have done.",
  //     href: "/portfolio#otherprj",
  //   },
  // ];

  // const [opt, setOpt] = useState(0);
  // const [animate, setAnimate] = useState("0");

  // const navBefore = () => {
  //   setAnimate("1");
  //   if (opt === 0) {
  //     setOpt(displays.length - 1);
  //   } else {
  //     setOpt(opt - 1);
  //   }
  // };

  // const navNext = () => {
  //   setAnimate("1");
  //   if (opt === displays.length - 1) {
  //     setOpt(0);
  //   } else {
  //     setOpt(opt + 1);
  //   }
  // };

  // const click = (idx) => {
  //   setOpt(idx);
  //   setAnimate("1");
  // };

  return (
    <div id="home" className="homeContainer testimonials">
      <div className="leftHomeContainer">
        <div className="leftContentContainer">
          <div className="nameContainer">
            <p className="homeName">
              Infinity Additional Tech Solutions
              <span style={{ fontSize: "25px", color: "lightgray" }}> 's</span>
            </p>
          </div>
       
          <div className="desc">
           I am a web development engineer and I use react and vue.js to develop pages. This project is a resume template that can be used as the project home page or resume page.
          </div>
          <button>Click</button>
        </div>
      </div>
      <div className="rightHomeContainer"></div>
    
    </div>
     
  );
};

export default Home;
 

