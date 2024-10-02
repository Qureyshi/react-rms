import React, { useState } from 'react';
import MyFooter from './MyFooter';
import MyNavbar from './MyNavbar';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    people: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: '',
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your submit logic here
  };

  return (
    <>
    <MyNavbar />
    <div className='container-fluid p-5 orders'>
        <div className='p-5 text-center text-danger'>
          <h1>Booking</h1>
        </div>
    </div>

    <div className='container py-5'>
    <div className="row">


<div className="form-section col-6">
  <h2>Book a table</h2>
  <form onSubmit={handleSubmit}>
    {/* Row for Date and Time */}
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="date">Date*</label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="time">Time*</label>
          <input
            type="time"
            id="time"
            name="time"
            className="form-control"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    

    {/* Row for People and First Name */}
    
      <div className="col-6">
        <div className="form-group">
          <label htmlFor="people">People*</label>
          <select
            id="people"
            name="people"
            className="form-control"
            value={formData.people}
            onChange={handleChange}
            required
          >
            <option value="">Select people</option>
            <option value="1">1 person</option>
            <option value="2">2 persons</option>
            <option value="3">3 persons</option>
            <option value="4">4 persons</option>
          </select>
        </div>
      </div>

      <div className="col-6">
        <div className="form-group">
          <label htmlFor="firstName">First name*</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-control"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    
    
    {/* Continue with the rest of the fields */}

    
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="lastName">Last name*</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-control"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    
    
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="phone">Phone*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="comments">Comments (optional)</label>
          <textarea
            id="comments"
            name="comments"
            className="form-control"
            value={formData.comments}
            onChange={handleChange}
            rows="2"
          ></textarea>
        </div>
      </div>
    
    </div>
    <button type="submit" className="btn btn-danger">Book a table</button>
  </form>
</div>

      <div className="image-section col-6">
        <img
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with actual burger image URL
          alt="Burger"
          className="burger-image"
        />
      </div>
    </div>

    </div>


    <MyFooter />
    </>
  );
};

export default BookingForm;
