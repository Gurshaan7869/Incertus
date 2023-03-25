import React from "react";
import prev from "./img/prev_icon.png";
import pred from "./img/pred_icon.png";
import learn from "./img/learn_icon.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ color: "white" }}>
      <div className="main">
        <div className="welcome">
          <h3>WELCOME TO </h3>
          <h1 className="name">INCERTUS</h1>
          <h3 className="des">
            Whether you're a recent graduate looking for your first job or an
            experienced professional looking to make a career change, our
            placement prediction website has something to offer you. With our
            tools and resources, you'll be well on your way to landing your
            dream job in no time.
          </h3>
          <h3 className="des">
            Experience the ultimate placement companion with our powerful trio
            of curated learning resources, company-specific questions, and
            exclusive placement prediction feature! So are you ready to take
            your career to the next level
          </h3>
        </div>
      </div>
      <div className="options">
        <div>
          <div className="blue homeCard">
            <Link className="link flex" to="http://localhost:3000/predict">
              <div className="flex-card">
                <img src={pred} alt="" className="homeIcons" />
              </div>

              <h3 className="cardHead">Placement Prediction</h3>

              {/* <div>
              <p>
                Our placement prediction feature allows you to calculate your
                chances of getting placed in your desired company based on your
                qualifications, skills, and other relevant factors. Simply enter
                your details into our form, and our algorithm will provide you
                with an accurate probability of getting placed in different
                companies.
              </p>
            </div> */}
            </Link>
          </div>
          <div className="green homeCard">
            <Link className="link flex" to="http://localhost:3000/learning">
              <div className="flex-card">
                <img src={learn} alt="" className="homeIcons" />
              </div>

              <h3 className="cardHead">Learning Topics</h3>
              {/* <p>
              We offer a wide range of learning resources and topics that are
              relevant to your desired job or field. From coding languages to
              interview skills to business acumen, we have curated resources
              such as articles, videos, and courses to help you improve your
              skills and knowledge.
            </p> */}
            </Link>
          </div>

          <div className="yellow homeCard">
            <Link
              className="link flex"
              to="http://localhost:3000/prevquestions"
            >
              <div className="flex-card">
                <img src={prev} alt="" className="homeIcons" />
              </div>

              <h3 className="cardHead">Company Specific Questions</h3>
              {/* <p>
                Our database of previously asked company questions provides you
                with valuable information about the types of questions that are
                commonly asked during interviews. By browsing through these
                questions, you can get a better idea of what to expect during
                your own interview and prepare accordingly.
              </p> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
