import React, { useState } from "react";
import data from "./data/data1.json";

const PrevQuestions = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  function handleClick(index) {
    setSelectedCard(selectedCard === index ? null : index);
  }
  return (
    <div>
      <div className="white margin">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="cardContainer">
        {data.map((card, index) => (
          <div className="card" key={index} onClick={() => handleClick(index)}>
            <div>
              <img className="logo" src={card.logo} alt="" />
            </div>
            <h2>{card.name}</h2>
            {selectedCard === index && (
              <div className="comp">
                <br />
                <div className="technical">
                  <h3>Technical Round Questions</h3>
                </div>
                <div className="techCard">{card.tq1}</div>
                <br />
                <div className="techCard">{card.tq2}</div>
                <br />
                <br />
                <div className="technical">
                  <h3>HR Round Questions</h3>
                </div>
                {card.hq1}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrevQuestions;
