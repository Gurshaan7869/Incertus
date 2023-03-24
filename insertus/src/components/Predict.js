import React, { useState } from "react";
import axios from "axios";

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
    <div className="white login-form-container px600">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="gender"></label>
          <select id="gender" name="Gender" itemType="number">
            <option value="">Select Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
          {/* <input type="number" name="Gender" id="gender" /> */}
        </div>
        <div>
          <label htmlFor="age"></label>
          <input type="text" placeholder="Age" name="Age" id="age" />
        </div>
        <div>
          <label htmlFor="hsc-p"></label>
          <input type="text" placeholder="10th marks" name="HSC_P" id="hsc-p" />
        </div>
        <div>
          <label htmlFor="ssc-p"></label>
          <input type="text" placeholder="12th marks" name="SSC_P" id="ssc-p" />
        </div>
        <div>
          <label htmlFor="stream"></label>
          <select id="stream" name="Stream" itemType="number">
            <option value="">Select Stream</option>
            <option value="0">Civil Engineering</option>
            <option value="1">Computer Science Engineering</option>
            <option value="2">Electrical Engineering</option>
            <option value="3">Electronics And Communication Engineering</option>
            <option value="4">Information Technology Engineering</option>
            <option value="5">Mechanical Engineering</option>
          </select>
          {/* <input type="text" name="Stream" id="stream" /> */}
        </div>
        <div>
          <label htmlFor="cgpa"></label>
          <input type="text" placeholder="College GPA" name="CGPA" id="cgpa" />
        </div>
        <div>
          <label htmlFor="internships"></label>
          <input
            type="text"
            placeholder="Number of Internships"
            name="Internships"
            id="internships"
          />
        </div>
        <div>
          <label htmlFor="backlogs"></label>
          <input
            type="text"
            placeholder="Number Of Backlogs"
            name="HistoryOfBacklogs"
            id="backlogs"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {showRes && <h3>{response.data.Placed}</h3>}
    </div>
  );
}

export default Predict;
