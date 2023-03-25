import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import topics from "../data/popularLanguages.json";
import notes from "../img/notes_icon.png";
import video from "../img/video_icon.png";

const Card = ({ topic }) => {
  return (
    <div className="AptiCard learningCard poplang">
      <h2>{topic.name}</h2>
      <div>
        <div className="popImg">
          <img
            className="heightimage"
            src={require("../img/" + topic.img)}
            alt={topic.name}
          />
        </div>
        <Link to={topic.course} className="flex margin-top nodeco nano">
          <img className="popicon" src={video} alt="" />
          <p className="middle">Nano Degree Certification</p>
        </Link>
        <Link to={topic.notes} className="flex nodeco nano">
          <img className="popicon" src={notes} alt="" />
          <p className="middle">Read Notes</p>
        </Link>
      </div>
    </div>
  );
};

const CardList = ({ topics }) => {
  return (
    <div className="card-list">
      {topics.map((topic) => (
        <Card key={topic.name} topic={topic} />
      ))}
    </div>
  );
};
function PopLang() {
  const [topicsData, setTopicsData] = useState([]);

  useEffect(() => {
    setTopicsData(topics);
  }, []);
  return (
    <div>
      <h1 className="yell margin">Popular Languages</h1>
      <div className="padding">
        <CardList topics={topicsData} />
      </div>
    </div>
  );
}

export default PopLang;
