import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../Assets/signin_background.jpg";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'  }}>
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-md font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-md font-medium text-gray-700 ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            {/* Forgot Password */}
            <Link to="#" className="text-md text-blue-600 hover:underline">
              Forgot password?
            </Link>
            {/* Submit Button */}
            <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Sign In
            </button>
          </div>
        </form>

        {/* Create Account */}
        <p className="mt-4 text-center text-md">
          Don't have an account?{' '}
          <Link to="/registration" className="text-blue-600 hover:underline">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
