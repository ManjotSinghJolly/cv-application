import React, { useState } from "react";

function PracticalInfo() {
  const [formData, setFormData] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    startDate: "",
    endDate: "",
  });

  function captureChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFormData((prevValue) => {
      if (inputName === "companyName") {
        return {
          companyName: newValue,
          positionTitle: prevValue.positionTitle,
          mainResponsibilities: prevValue.mainResponsibilities,
          startDate: prevValue.startDate,
          endDate: prevValue.endDate,
        };
      } else if (inputName === "positionTitle") {
        return {
          companyName: prevValue.companyName,
          positionTitle: newValue,
          mainResponsibilities: prevValue.mainResponsibilities,
          startDate: prevValue.startDate,
          endDate: prevValue.endDate,
        };
      } else if (inputName === "mainResponsibilities") {
        return {
          companyName: prevValue.companyName,
          positionTitle: prevValue.positionTitle,
          mainResponsibilities: newValue,
          startDate: prevValue.startDate,
          endDate: prevValue.endDate,
        };
      } else if (inputName === "startDate") {
        return {
          companyName: prevValue.companyName,
          positionTitle: prevValue.positionTitle,
          mainResponsibilities: prevValue.mainResponsibilities,
          startDate: newValue,
          endDate: prevValue.endDate,
        };
      } else if (inputName === "endDate") {
        return {
          companyName: prevValue.companyName,
          positionTitle: prevValue.positionTitle,
          mainResponsibilities: prevValue.mainResponsibilities,
          startDate: prevValue.startDate,
          endDate: newValue,
        };
      }
      return prevValue;
    });
  }

  const [isEditing, setIsEditing] = useState(true);

  function handleSubmission(event) {
    event.preventDefault();
    setIsEditing(false); // to switch to the display mode
  }

  function handleEditButton(event) {
    setIsEditing(true);
  }

  return (
    <div>
      <h1>Practical Information</h1>
      {isEditing ? (
        // EDIT MODE
        <form onSubmit={handleSubmission}>
          <label htmlFor="companyName">Company Name:</label>
          <br />
          <input
            onChange={captureChange}
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
          ></input>
          <br />
          <label htmlFor="positionTitle">Position Title:</label>
          <br />
          <input
            onChange={captureChange}
            type="text"
            id="positionTitle"
            name="positionTitle"
            value={formData.positionTitle}
          ></input>
          <br />
          <label htmlFor="mainResponsibilities">Main Responsibilities:</label>
          <br />
          <textarea
            onChange={captureChange}
            id="mainResponsibilities"
            name="mainResponsibilities"
            value={formData.mainResponsibilities}
          ></textarea>
          <br />
          <label htmlFor="startDate">Start Date:</label>
          <br />
          <input
            onChange={captureChange}
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
          ></input>
          <br />
          <label htmlFor="endDate">End Date:</label>
          <br />
          <input
            onChange={captureChange}
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
          ></input>
          <button type="submit">Submit</button>
        </form>
      ) : (
        // DISPLAY MODE
        <div>
          <p>Company Name: {formData.companyName}</p>
          <p>Position Title: {formData.positionTitle}</p>
          <p>Main Responsibilities: {formData.mainResponsibilities}</p>
          <p>Start Date: {formData.startDate}</p>
          <p>End Date: {formData.endDate}</p>
          <button type="button" onClick={handleEditButton}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default PracticalInfo;
