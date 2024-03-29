import React, { useState, useEffect } from "react";
import topics from "../data/csSubjects.json";
import { Link } from "react-router-dom";

const Card = ({ topic }) => {
  const [showWebsite, setShowWebsite] = useState(false);
  const [cardWidth, setCardWidth] = useState(400);

  const toggleWebsite = () => {
    setShowWebsite(!showWebsite);
    setCardWidth(showWebsite ? 400 : 2000);
  };
  return (
    <div
      className="AptiCard learningCard red"
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
        <div>
          <iframe
            title={topic.name}
            src={topic.link}
            style={{ width: "100%", height: "650px", border: "none" }}
          />
          <h5 className="margin">
            Frame not loading? Go to original site instead...
          </h5>
          <Link to={topic.link}>
            <button className="button">GO TO SITE</button>
          </Link>
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
function CsSubjects() {
  const [topicsData, setTopicsData] = useState([]);

  useEffect(() => {
    setTopicsData(topics);
  }, []);
  return (
    <div>
      <h1 className="yell margin">CS Subjects</h1>
      <div className="padding">
        <CardList topics={topicsData} />
      </div>
    </div>
  );
}

export default CsSubjects;
