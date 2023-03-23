import React, { useState, useEffect } from "react";
import topics from "./data/data1.json";

const Card = ({ topic }) => {
  const [showWebsite, setShowWebsite] = useState(false);
  const [cardWidth, setCardWidth] = useState(400);

  const toggleWebsite = () => {
    setShowWebsite(!showWebsite);
    setCardWidth(showWebsite ? 400 : 2000);
  };
  return (
    <div
      className="AptiCard learningCard backwhite"
      style={{ width: cardWidth }}
      onClick={toggleWebsite}
    >
      <img className="compImage" src={topic.logo} alt={topic.name} />
      <h2>{topic.name}</h2>
      {showWebsite && (
        <div>
          <div className="technical">
            <h3>Technical Round Questions</h3>
          </div>
          <div className="techCard">{topic.tq1}</div>
          <br />
          <div className="techCard">{topic.tq2}</div>
          <br />
          <br />
          <div className="technical">
            <h3>HR Round Questions</h3>
          </div>
          {topic.hq1}
        </div>
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
function Aptitude() {
  const [topicsData, setTopicsData] = useState([]);

  useEffect(() => {
    setTopicsData(topics);
  }, []);
  return (
    <div>
      <h1 className="white margin">Company Specific Questions</h1>
      <div className="padding">
        <CardList topics={topicsData} />
      </div>
    </div>
  );
}

export default Aptitude;
