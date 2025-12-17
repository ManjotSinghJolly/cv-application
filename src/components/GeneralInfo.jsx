import React, { useState } from "react";

function GeneralInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });
  const [isEditing, setIsEditing] = useState(true);

  function captureChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFormData((prevValue) => {
      if (inputName === "name") {
        return {
          name: newValue,
          email: prevValue.email,
          phonenumber: prevValue.phonenumber,
        };
      } else if (inputName === "email") {
        return {
          name: prevValue.name,
          email: newValue,
          phonenumber: prevValue.phonenumber,
        };
      } else if (inputName === "phonenumber") {
        return {
          name: prevValue.name,
          email: prevValue.email,
          phonenumber: newValue,
        };
      }
      return prevValue;
    });
  }

  function handleSubmission(event) {
    event.preventDefault();
    setIsEditing(false); // To switch to the display mode
  }

  function handleEditButton(event) {
    setIsEditing(true);
  }

  return (
    <div>
      <h1>General Information</h1>
      {isEditing ? (
        // EDIT MODE
        <form onSubmit={handleSubmission}>
          <label htmlFor="name">Name: </label>
          <br />
          <input
            onChange={captureChange}
            type="text"
            id="name"
            name="name"
            value={formData.name}
          ></input>
          <br />
          <label htmlFor="email">Email: </label>
          <br />
          <input
            onChange={captureChange}
            type="email"
            id="email"
            name="email"
            value={formData.email}
          ></input>
          <br />
          <label htmlFor="phonenumber">Phone Number: </label>
          <br />
          <input
            onChange={captureChange}
            type="text"
            id="phonenumber"
            name="phonenumber"
            value={formData.phonenumber}
          ></input>
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        // DISPLAY MODE
        <div>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phonenumber}</p>
          <button type="button" onClick={handleEditButton}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;
