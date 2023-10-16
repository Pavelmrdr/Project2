import React, { useState } from "react";

import joSpoltonImg from "./images/2h-profile-jo.png";
import paulEganImg from "./images/1593546589885-fotor-2023091802339.png";
import SebastienCronImg from "./images/1652378194247-fotor-20230905162913.png";
import cristianBeresImg from "./images/1579200632404.jpeg";

import "./index.css";

const App = () => {
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

  let [indexNumber, setIndexNumber] = useState(0);

  const rightHandler = () => {
    if (indexNumber === 3) {
      setIndexNumber(0);
    } else {
      setIndexNumber(indexNumber + 1);
    }
  };

  const leftHandler = () => {
    if (indexNumber === 0) {
      setIndexNumber(3);
    } else {
      setIndexNumber(indexNumber - 1);
    }
  };

  const randomHandler = () => {
    setIndexNumber(Math.floor(Math.random() * (3 - 0 + 1)) + 0)
  }

  console.log(indexNumber)



  return (
    <div className="container">
        <h1 className="text-color">Our Reviews</h1>
        <div className="line"></div>
      <article>
        { <img src={content[indexNumber].image} alt={content[indexNumber].name} />  }
        <h3 className="text-color">{content[indexNumber].name}</h3>
        <h5 className="position-color">{content[indexNumber].position}</h5>
        <p className="dsc">{content[indexNumber].dsc}</p>
        <div>
          <button className="arrow" onClick={leftHandler}>←</button>
          <button className="arrow" onClick={rightHandler}>→</button>
        </div>
        <button onClick={randomHandler} className="rndm-btn">Surprise Me</button>
      </article>
    </div>
  );
};

export default App;
