import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

var response;

function Predict() {
  const [showRes, setShowRes] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    try {
      response = await axios.post("http://127.0.0.1:5000/predict", data);
      console.log(response.data.Placed);
      setShowRes(response.data.Placed);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1 className="yell" style={{ margin: "20px" }}>
        PLACEMENT PREDICTION
      </h1>
      <div className="white login-form-container px600">
        <h3 style={{ margin: "20px" }}>Find your odds of getting placed!</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="gender"></label>
            <select id="gender" name="Gender" itemType="number" required>
              <option value="">Select Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
            {/* <input type="number" name="Gender" id="gender" /> */}
          </div>
          <div>
            <label htmlFor="age"></label>
            <input
              type="number"
              placeholder="Age"
              name="Age"
              id="age"
              required
            />
          </div>
          <div>
            <label htmlFor="hsc-p"></label>
            <input
              type="number"
              placeholder="10th marks"
              name="HSC_P"
              id="hsc-p"
              required
            />
          </div>
          <div>
            <label htmlFor="ssc-p"></label>
            <input
              type="number"
              placeholder="12th marks"
              name="SSC_P"
              id="ssc-p"
              required
            />
          </div>
          <div>
            <label htmlFor="stream"></label>
            <select id="stream" name="Stream" itemType="number" required>
              <option value="">Select Stream</option>
              <option value="0">Civil Engineering</option>
              <option value="1">Computer Science Engineering</option>
              <option value="2">Electrical Engineering</option>
              <option value="3">
                Electronics And Communication Engineering
              </option>
              <option value="4">Information Technology Engineering</option>
              <option value="5">Mechanical Engineering</option>
            </select>
            {/* <input type="text" name="Stream" id="stream" /> */}
          </div>
          <div>
            <label htmlFor="cgpa"></label>
            <input
              type="number"
              placeholder="College GPA"
              name="CGPA"
              id="cgpa"
              required
            />
          </div>
          <div>
            <label htmlFor="internships"></label>
            <input
              type="number"
              placeholder="Number of Internships"
              name="Internships"
              id="internships"
              required
            />
          </div>
          <div>
            <label htmlFor="backlogs"></label>
            <input
              type="number"
              placeholder="Number Of Backlogs"
              name="HistoryOfBacklogs"
              id="backlogs"
              required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        {showRes && (
          <div>
            <h3>Your placement chances are : {response.data.Placed}%</h3>
          </div>
        )}
      </div>
      <h2 className="yell margin chances">Want to increase your chances?</h2>
      <h5 className="white">Try our Learning Resources</h5>
      <Link to={"http://localhost:3000/learning"}>
        <button className="redilearning">Learning</button>
      </Link>
    </div>
  );
}

export default Predict;
