import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  // Define state variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Function to handle form submission and post data to Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be posted to Firebase
    const formData = {
      name,
      email,
      phone,
    };

    // Perform the POST request to Firebase
    try {
      const response = await fetch('https://api-call-react-7d7f8-default-rtdb.firebaseio.com/contact.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Data posted successfully
        console.log('Data posted to Firebase successfully');
        // You can redirect the user or show a success message here
      } else {
        // Handle error cases
        console.error('Failed to post data to Firebase');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="contact-container">
      <h2 className="form-header">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
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
        <div >
          <label htmlFor="email" className="form-label">
            Email
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
        <div>
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
