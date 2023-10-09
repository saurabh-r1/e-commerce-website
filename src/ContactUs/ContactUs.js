import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './ContactUs.css';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a data object with the user's input
    const userData = {
      name,
      email,
      phoneNumber,
    };

    // Make a POST request to Firebase using Axios
    axios
      .post('https://api-call-react-7d7f8-default-rtdb.firebaseio.com/contacts.json', userData)
      .then((response) => {
        console.log('Data saved successfully:', response.data);
        // Clear the form fields after successful submission
        setName('');
        setEmail('');
        setPhoneNumber('');
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  return (
    <div className="contact-container">
      <h2 className="form-header">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:-
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:-
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number:-
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
