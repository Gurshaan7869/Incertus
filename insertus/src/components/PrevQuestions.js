import React, { useState } from "react";
import data from "./data1.json";

const PrevQuestions = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  function handleClick(index) {
    setSelectedCard(selectedCard === index ? null : index);
  }
  return (
    <div>
      {data.map((card, index) => (
        <div key={index} onClick={() => handleClick(index)}>
          <h2>{card.name}</h2>
          {selectedCard === index && (
            <div>
              <br />
              <h5>Technical Round Questions</h5>
              {card.tq1}
              <br />
              {card.tq2}
              <br />
              <br />
              <h5>HR Round Questions</h5>
              {card.hq1}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PrevQuestions;
