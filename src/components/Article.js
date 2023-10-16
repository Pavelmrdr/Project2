import React, { useState } from "react";

import './Article.css'

const Article = (props) => {
  let [indexNumber, setIndexNumber] = useState(0);

  const prevHandler = () => {
    if (indexNumber === 0) {
      setIndexNumber(3);
    } else {
      setIndexNumber(indexNumber - 1);
    }
  };

  const nextHandler = () => {
    if (indexNumber === 3) {
      setIndexNumber(0);
    } else {
      setIndexNumber(indexNumber + 1);
    }
  };

  const randomHandler = () => {
    setIndexNumber(Math.floor(Math.random() * (3 - 0 + 1)) + 0);
  };
  return (
    <div>
      <article>
        <img src={props.content[indexNumber].image} alt={props.content[indexNumber].name} />
        <h3>{props.content[indexNumber].name}</h3>
        <h5>{props.content[indexNumber].position}</h5>
        <p>{props.content[indexNumber].dsc}</p>
        <div>
          <button className="arrow" onClick={prevHandler}>
            ←
          </button>
          <button className="arrow" onClick={nextHandler}>
            →
          </button>
        </div>
        <button className="rndm-btn" onClick={randomHandler}>
          Surprise Me
        </button>
      </article>
    </div>
  );
};

export default Article;
