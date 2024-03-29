import React, { useState, useEffect } from "react";
import topics from "./data/learningTopics.json";
import { Link } from "react-router-dom";

const Card = ({ topic, color }) => {
  return (
    <Link
      className="no-deco"
      to={`/learning/${topic.name.toLowerCase().replace(" ", "")}`}
    >
      <div className={`${color} learningCard`}>
        <h2>{topic.name}</h2>
        <img
          className="learningImage"
          src={require("./img/" + topic.img)}
          alt=""
        />
      </div>
    </Link>
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

function Learning() {
  const [topicsData, setTopicsData] = useState([]);

  useEffect(() => {
    setTopicsData(topics);
  }, []);

  return (
    <div>
      <h1 className="yell margin">LEARNING RESOURCES</h1>
      <h3 className="white margin">
        Make yourself placement ready with our curated learning resources.
      </h3>
      <div className="padding">
        <CardList topics={topicsData} />
      </div>
    </div>
  );
}

export default Learning;
