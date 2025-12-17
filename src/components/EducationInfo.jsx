import React, { useState } from "react";

function EducationInfo() {
  const [formData, setFormData] = useState({
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  function captureChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFormData((prevValue) => {
      if (inputName === "schoolName") {
        return {
          schoolName: newValue,
          titleOfStudy: prevValue.titleOfStudy,
          dateOfStudy: prevValue.dateOfStudy,
        };
      } else if (inputName === "titleOfStudy") {
        return {
          schoolName: prevValue.schoolName,
          titleOfStudy: newValue,
          dateOfStudy: prevValue.dateOfStudy,
        };
      } else if (inputName === "dateOfStudy") {
        return {
          schoolName: prevValue.schoolName,
          titleOfStudy: prevValue.titleOfStudy,
          dateOfStudy: newValue,
        };
      }
      return prevValue;
    });
  }

  function handleSubmission(event) {
    event.preventDefault();
    setIsEditing(false); // to switch to the edit mode
  }

  function handleEditButton(event) {
    setIsEditing(true);
  }

  return (
    <div>
      <h1>Education Information</h1>
      {isEditing ? (
        // EDIT MODE
        <form onSubmit={handleSubmission}>
          <label htmlFor="schoolName">School Name:</label>
          <br />
          <input
            onChange={captureChange}
            type="text"
            id="schoolName"
            name="schoolName"
            value={formData.schoolName}
          ></input>
          <br />
          <label htmlFor="titleOfStudy">Title of Study:</label>
          <br />
          <input
            onChange={captureChange}
            type="text"
            id="titleOfStudy"
            name="titleOfStudy"
            value={formData.titleOfStudy}
          ></input>
          <br />
          <label htmlFor="dateOfStudy">Date of Study:</label>
          <br />
          <input
            onChange={captureChange}
            type="date"
            id="dateOfStudy"
            name="dateOfStudy"
            value={formData.dateOfStudy}
          ></input>
          <button type="submit">Submit</button>
        </form>
      ) : (
        // DISPLAY MODE
        <div>
          <p>School Name: {formData.schoolName}</p>
          <p>Title of Study: {formData.titleOfStudy}</p>
          <p>Date of Study: {formData.dateOfStudy}</p>
          <button type="button" onClick={handleEditButton}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default EducationInfo;
