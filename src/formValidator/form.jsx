import React, { useState } from 'react';
import './form.css'; 

function FormValidation() {
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [textError, setTextError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleTextChange = (e) => {
    const value = e.target.value;
    setText(value);
    if (value.trim() !== '') {
      setTextError(false);
    } else {
      setTextError(true);
    }
    setSubmitDisabled(value.trim() === '' || number.trim() === '');
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    setNumber(value);
    if (value.trim() !== '') {
      setNumberError(false);
    } else {
      setNumberError(true);
    }
    setSubmitDisabled(text.trim() === '' || value.trim() === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    setText('');
    setNumber('');
    setSubmitDisabled(true);
  };

  const handleBlur = () => {
    if (activeField === 'text' && text.trim() === '') {
      setTextError(true);
    }
    if (activeField === 'number' && number.trim() === '') {
      setNumberError(true);
    }
  };

  const handleInputClick = (field) => {
    setActiveField(field);
    // if (field === 'text') {
    //   setTextError(false);
    // } else if (field === 'number') {
    //   setNumberError(false);
    // }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
          id='product'
            type="text"
            value={text}
            onChange={handleTextChange}
            onBlur={handleBlur}
            onClick={() => handleInputClick('text')}
            placeholder="Enter text"
          />
          {activeField === 'text' && textError && <p style={{ color: 'red' }}>Please enter text</p>}
        </div>
        <div>
          <input
            id='quantity'
            type="number"
            value={number}
            onChange={handleNumberChange}
            onBlur={handleBlur}
            onClick={() => handleInputClick('number')}
            placeholder="Enter number"
          />
          {activeField === 'number' && numberError && <p style={{ color: 'red' }}>Please enter number</p>}
        </div>
        <div>
          <button type="submit" disabled={submitDisabled}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormValidation;
