import React, { useState } from "react";

function Predic() {
  const [formData, setFormData] = useState({
    age: "",
    tenthMarks: "",
    twelfthMarks: "",
    stream: "",
    collegeCGPA: "",
    internships: "",
    backlogs: "",
  });

  const [serverResponse, setServerResponse] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://placement-data-analysis.onrender.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => setServerResponse(data.message))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <label>
          10th Marks:
          <input
            type="number"
            name="tenthMarks"
            value={formData.tenthMarks}
            onChange={handleChange}
          />
        </label>
        <label>
          12th Marks:
          <input
            type="number"
            name="twelfthMarks"
            value={formData.twelfthMarks}
            onChange={handleChange}
          />
        </label>
        <label>
          Stream:
          <input
            type="text"
            name="stream"
            value={formData.stream}
            onChange={handleChange}
          />
        </label>
        <label>
          College CGPA:
          <input
            type="number"
            name="collegeCGPA"
            value={formData.collegeCGPA}
            onChange={handleChange}
          />
        </label>
        <label>
          Internships:
          <input
            type="number"
            name="internships"
            value={formData.internships}
            onChange={handleChange}
          />
        </label>
        <label>
          Number of Backlogs:
          <input
            type="number"
            name="backlogs"
            value={formData.backlogs}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {serverResponse && <p>{serverResponse}</p>}
    </div>
  );
}

export default Predic;
