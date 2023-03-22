import React from "react";
import prev from "./img/prev_icon.png";
import pred from "./img/pred_icon.png";
import learn from "./img/learn_icon.png";

function Home() {
  return (
    <div style={{ color: "white" }}>
      <div className="main">
        <h3 className="welcome">WELCOME TO </h3>
        <h1 className="name">INCERTUS</h1>
        <h3 className="des">
          Whether you're a recent graduate looking for your first job or an
          experienced professional looking to make a career change, our
          placement prediction website has something to offer you. With our
          tools and resources, you'll be well on your way to landing your dream
          job in no time.
        </h3>
      </div>
      <div className="flex">
        <div className="blue homeCard">
          <div>
            <img src={pred} alt="" className="homeIcons" />
          </div>
          <div className="homeContent">
            <h3 className="cardHead">Placement Prediction</h3>
            <p>
              Our placement prediction feature allows you to calculate your
              chances of getting placed in your desired company based on your
              qualifications, skills, and other relevant factors. Simply enter
              your details into our form, and our algorithm will provide you
              with an accurate probability of getting placed in different
              companies.
            </p>
          </div>
        </div>
        <div className="red homeCard">
          <div>
            <img src={learn} alt="" className="homeIcons" />
          </div>
          <h3 className="cardHead">Learning Topics</h3>
          <p>
            We offer a wide range of learning resources and topics that are
            relevant to your desired job or field. From coding languages to
            interview skills to business acumen, we have curated resources such
            as articles, videos, and courses to help you improve your skills and
            knowledge.
          </p>
        </div>
        <div className="yellow homeCard">
          <div>
            <img src={prev} alt="" className="homeIcons" />
          </div>
          <div>
            <h3 className="cardHead">Previously Asked Company Questions</h3>
            <p>
              Our database of previously asked company questions provides you
              with valuable information about the types of questions that are
              commonly asked during interviews. By browsing through these
              questions, you can get a better idea of what to expect during your
              own interview and prepare accordingly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
