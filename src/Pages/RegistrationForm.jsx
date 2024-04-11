import React, { useState } from 'react';
import BackGroundImage from "../Assets/registration_background.jpg";



const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    sex: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    phone: '',
  });

  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordRestrictionError, setPasswordRestrictionError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'confirmPassword') {
      setPasswordMatchError(value !== formData.password);
    }

    if (name === 'email') {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setFormErrors({ ...formErrors, email: isValidEmail ? '' : 'Please enter a valid email address' });
    }

    if (name === 'phone') {
      const isValidPhone = /^\d{10}$/.test(value);
      setFormErrors({ ...formErrors, phone: isValidPhone ? '' : 'Please enter a valid 10-digit phone number' });
    }

    if (name === 'password') {
      const isValidPassword = /^.{8,}$/.test(value);

      setPasswordRestrictionError(!isValidPassword);
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    setPasswordMatchError(false);

    console.log(formData);
  };

  return (
    <div className="bg-gray-100 text-gray-800 py-12 px-10 md:px-20" style={{ minHeight: '100vh', backgroundImage: `url(${BackGroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', backgroundAttachment: 'fixed', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
    <div className="flex justify-center mt-5">
       <div className="w-full max-w-md sticky top-20 ">

       <form onSubmit={handleSubmit} className="bg-white bg-opacity-90 shadow-md rounded px-6 pt-6 pb-8 mb-4">
       <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-semibold mb-2" htmlFor="firstName">First Name</label>
              <input className="input-field rounded-md bg-white bg-opacity-75 border w-full px-4 py-2 focus:border-gray-500 hover:border-gray-500" id="firstName" name="firstName" type="text" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} required />
              {formData.firstName.length > 0 && formErrors.firstName && <p className="text-red-500 text-xs italic mt-1">{formErrors.firstName}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-md font-semibold mb-2" htmlFor="lastName">Last Name</label>
              <input className="input-field border bg-white bg-opacity-75 w-full px-4 py-2" id="lastName" name="lastName" type="text" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} required />
              {formData.lastName.length > 0 && formErrors.lastName && <p className="text-red-500 text-xs italic mt-1">{formErrors.lastName}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-md font-semibold mb-2" htmlFor="email">Email</label>
              <input className="input-field  bg-white bg-opacity-75  border w-full px-4 py-2" id="email" name="email" type="email" placeholder="example@example.com" value={formData.email} onChange={handleChange} required />
              {formErrors.email && <p className="text-red-500 text-xs italic">{formErrors.email}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-md font-semibold mb-2" htmlFor="username">Username</label>
              <input className="input-field  bg-white bg-opacity-75  border w-full px-4 py-2" id="username" name="username" type="text" placeholder="Enter your username" value={formData.username} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-md font-semibold mb-2" htmlFor="password">Password</label>
              <input className="input-field  bg-white bg-opacity-75  border w-full px-4 py-2" id="password" name="password" type="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
              {passwordRestrictionError && <p className="text-red-500 text-xs italic mt-1">Password must be at least 8 characters long</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-md font-semibold mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input className="input-field   bg-white bg-opacity-75 border w-full px-4 py-2" id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required />
              {passwordMatchError && <p className="text-red-500 text-xs italic mt-1">Password must match</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-md font-semibold mb-2" htmlFor="phone">Phone</label>
              <input className="input-field  bg-white bg-opacity-75  border w-full px-4 py-2" id="phone" name="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
              {formErrors.phone && <p className="text-red-500 text-xs italic">{formErrors.phone}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-md font-semibold mb-2" htmlFor="sex">Gender</label>
              <div className="flex">
                <label className="mr-4">
                  <input type="radio" name="sex" value="male" className="mr-1" onChange={handleChange} /> Male
                </label>
                <label>
                  <input type="radio" name="sex" value="female" className="mr-1" onChange={handleChange} /> Female
                </label>
              </div>
            </div>
            <p className="text-md text-gray-600 text-center mb-6">
  Already have an account?{' '}
  <a className="text-blue-500 hover:text-blue-700" href="/signin">Sign in</a>
</p>

            
            <button type="submit" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
