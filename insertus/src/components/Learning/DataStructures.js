import React, { useState, useEffect } from "react";
import topics from "../data/dsa.json";

const Card = ({ topic }) => {
  const [showWebsite, setShowWebsite] = useState(false);
  const [cardWidth, setCardWidth] = useState(400);

  const toggleWebsite = () => {
    setShowWebsite(!showWebsite);
    setCardWidth(showWebsite ? 400 : 2000);
  };
  return (
    <div
      className="AptiCard learningCard dsaCard blue"
      style={{ width: cardWidth }}
      onClick={toggleWebsite}
    >
      <h2 className="">{topic.name}</h2>

      {showWebsite && (
        <iframe
          title={topic.name}
          src={topic.link}
          style={{ width: "100%", height: "650px", border: "none" }}
        />
      )}
    </div>
  );
};

const CardList = ({ topics }) => {
  const colors = ["red", "blue", "green", "yellow", "purple"];

  return (
    <div className="card-list">
      {topics.map((topic, index) => (
        <Card
          key={topic.name}
          topic={topic}
          color={colors[index % colors.length]}
        />
      ))}
    </div>
  );
};
function DataStructures() {
  const [topicsData, setTopicsData] = useState([]);

  useEffect(() => {
    setTopicsData(topics);
  }, []);
  return (
    <div>
      <h1 className="white margin">Data Structures</h1>
      <div className="padding">
        <CardList topics={topicsData} />
      </div>
    </div>
  );
}

export default DataStructures;
