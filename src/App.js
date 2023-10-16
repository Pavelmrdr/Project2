import React, { useState } from "react";

import joSpoltonImg from "./images/2h-profile-jo.png";
import paulEganImg from "./images/1593546589885-fotor-2023091802339.png";
import SebastienCronImg from "./images/1652378194247-fotor-20230905162913.png";
import cristianBeresImg from "./images/1579200632404.jpeg";

import "./index.css";
import Header from "./components/Header";
import Article from "./components/Article";

const content = [
  {
    image: joSpoltonImg,
    name: "Jo Spolton",
    position: "Founder, Rumage",
    dsc: "7code delivered the project on time, and the client experienced partner growth, onboarding metrics, and retention rates. They communicated frequently and promptly via email and virtual meetings, ensuring an effective workflow. Their understanding of the client's system was a hallmark of their work.",
  },
  {
    image: paulEganImg,
    name: "Paul Egan",
    position: "CTO, Founders Factory",
    dsc: "All module deadlines have been met thanks to 7code’s consistent communication and technical competence. Their code’s quality is exceptionally noteworthy.",
  },
  {
    image: SebastienCronImg,
    name: "Sebastien Cron",
    position: "Project Manager, Numerize",
    dsc: "We worked on the responsive part of our GED (Electronic Document Manager) tool with 7code. The project management was perfect from start to finish. All the work was carried out correctly, on time, and fully transparent.",
  },
  {
    image: cristianBeresImg,
    name: "Cristian Beres",
    position: "CEO, Synergo Group",
    dsc: "The 7Code team has been a great partner to the Synergo Group. They are knowledgeable, creative and they adapt easily. Highly recommended",
  },
];

const App = () => {
  return (
    <div className="container">
        <Header />
        <Article content={content} />
    </div>
  );
};

export default App;
