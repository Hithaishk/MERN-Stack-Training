import React, { useState, useEffect } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'male',
  });

  const [participants, setParticipants] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddParticipant = () => {
    if (formData.name.trim() === '' || formData.age.trim() === '') {
      alert('Name and Age are required.');
    } else {
      setParticipants([...participants, { ...formData }]);
      setFormData({
        name: '',
        age: '',
        gender: 'male',
      });
    }
  };

  useEffect(() => {
    // You can fetch participants from the backend if needed
  }, []);

  return (
    <div>
      <h2>Trip Registration Form</h2>
      <form onSubmit={handleAddParticipant}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit">Add Participant</button>
      </form>
      <ul>
        {participants.map((participant, index) => (
          <li key={index}>
            {participant.name}, {participant.age}, {participant.gender}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
