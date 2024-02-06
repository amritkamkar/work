// src/AddEmployee.js
import React, { useState } from 'react';

const AddEmployee = () => {
  const [newEmployee, setNewEmployee] = useState({
    // Initial state for a new employee
    // Add more fields as needed
    ID: '',
    Name: '',
    Gender: '',
    Joining_Date: '',
    Check_Out: '',
    Salary: '',
    BonusPercent: '',
    Team: '',
    Designation: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleAddEmployee = () => {
    // Implement logic to send the new employee data to the backend
    // For simplicity, you can use fetch or any other HTTP client library

    // Example fetch usage (replace with your actual endpoint)
    fetch('http://127.0.0.1:5000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include any required headers (e.g., authorization token)
      },
      body: JSON.stringify(newEmployee),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend (e.g., show success message)
        console.log('Employee added successfully:', data);

        // Clear the form after successful addition
        setNewEmployee({
          ID: '',
          Name: '',
          Gender: '',
          Joining_Date: '',
          Check_Out: '',
          Salary: '',
          BonusPercent: '',
          Team: '',
          Designation: '',
        });
      })
      .catch((error) => {
        console.error('Error adding employee:', error);
        // Handle the error (e.g., show error message)
      });
  };

  return (
    <div>
      <h3>Add Employee</h3>
      <form>
        {/* Include input fields for each employee attribute */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="Name" value={newEmployee.Name} onChange={handleInputChange} />

        {/* Add more input fields for other attributes */}

        <button type="button" onClick={handleAddEmployee}>
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;