import React, { useState, useEffect } from 'react';

const EmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000');
        if (!response.ok) {
          throw new Error('Failed to fetch employee data');
        }
        const data = await response.json();
        setEmployees(data); // Assuming the response is an array of employee objects
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployeeData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeComponent;