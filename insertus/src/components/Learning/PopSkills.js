import React, { useState, useEffect } from "react";
import topics from "../data/popularSkills.json";

const Card = ({ topic, color }) => {
  const [showWebsite, setShowWebsite] = useState(false);
  const [cardWidth, setCardWidth] = useState(400);

  const toggleWebsite = () => {
    setShowWebsite(!showWebsite);
    setCardWidth(showWebsite ? 400 : 2000);
  };
  return (
    <div
      className="AptiCard learningCard purple"
      style={{ width: cardWidth }}
      onClick={toggleWebsite}
    >
      <h2>{topic.name}</h2>
      <img
        className="learningImage"
        src={require("../img/" + topic.img)}
        alt={topic.name}
      />
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

function PopSkills() {
  const [topicsData, setTopicsData] = useState([]);

  useEffect(() => {
    setTopicsData(topics);
  }, []);
  return (
    <div>
      <h1 className="white margin">Aptitude</h1>
      <CardList topics={topicsData} />
    </div>
  );
}

export default PopSkills;
