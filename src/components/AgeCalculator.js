import React, { useState } from 'react';
import './age.css';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageDiff = today - birthDateObj;
    const calculatedAge = new Date(ageDiff);
    setAge(Math.abs(calculatedAge.getUTCFullYear() - 1970));
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <label htmlFor="birthdate">Enter your birth date: </label>
      <input
        type="date"
        id="birthdate"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
};

export default AgeCalculator;
