import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Form() {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [selectedPackage, setSelectedPackage] = useState('basic');
  const packagePrices = {
    basic: 999,
    standard: 1999,
    premium: 2999,
  };

  // Additional state for total price per charge and tour message
  const [totalPricePerCharge, setTotalPricePerCharge] = useState(0);
  const [tourMessage, setTourMessage] = useState('');

  const handleAddPerson = () => {
    if (name.trim() === '' || age.trim() === '') {
      alert('Name and Age are required.');
    } else {
      setPeople([...people, { name, age, gender }]);
      setName('');
      setAge('');
      setGender('male');
    }
  };

  const handleCheckPrice = () => {
    const price = packagePrices[selectedPackage];
    const numberOfPeople = people.length;
    const totalPrice = price * numberOfPeople;
    setTotalPricePerCharge(totalPrice);
  };

  useEffect(() => {
    // Update the tour message when the selected package changes
    if (selectedPackage === 'basic') {
      setTourMessage('Enjoy a budget-friendly trip with our Basic Package.');
    } else if (selectedPackage === 'standard') {
      setTourMessage('Upgrade your trip with our Standard Package for more amenities.');
    } else if (selectedPackage === 'premium') {
      setTourMessage('Indulge in luxury with our Premium Package for the ultimate experience.');
    } else {
      setTourMessage('Select a package to receive tour information.');
    }
  }, [selectedPackage]);

  return (
    <div className="container mt-5 col-lg-4 col-md-6 col-sm-10">
      <h2 className="text-primary">Registration Form</h2>
      <div className="form-group">
        <label className="text-danger">Name:</label>
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="text-warning">Age:</label>
        <input type number="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="text-info">Gender:</label>
        <select className="form-control" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label className="text-success">Select a Package for All Persons:</label>
        <select className="form-control" value={selectedPackage} onChange={(e) => setSelectedPackage(e.target.value)}>
          <option value="basic">Basic Package</option>
          <option value="standard">Standard Package</option>
          <option value="premium">Premium Package</option>
        </select>
      </div>
      <button className="btn btn-success mt-2" onClick={handleAddPerson}>Add Person</button>
      <button className="btn btn-primary mt-2" onClick={handleCheckPrice}>Check Price</button>
      <div className="mt-3">
      {people.map((person, index) => (
  <div key={index}>Person {index + 1}: {person.name}, {person.age}, {person.gender}</div>
))}

      </div>
      <div className="mt-3">
        <strong className="text-danger">Total Price per Charge: ₹{totalPricePerCharge}</strong>
      </div>

      {/* Additional section for tour message */}
      <div className="mt-3">
        <div className="alert alert-info">
          <strong>Tour Message:</strong>
          <p className="text-white bg-primary p-2 rounded">{tourMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default Form;
