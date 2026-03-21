import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../services/authService";
import signupImg from '../../assets/signup.jpg';

function SignupForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signupUser(formData);
      setMessage("Signup successful!");
      setFormData({
        fullname: "",
        email: "",
        passowrd: "",
      })
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  const {fullname, email, passowrd} = formData;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="flex w-full max-w-6xl mx-auto shadow-2xl rounded-2xl overflow-hidden bg-white">
        {/* Left Side */}
        <div className="hidden lg:flex w-1/2 p-4 justify-center items-center bg-purple-50">
          <img
            className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            src={signupImg}
            alt="An illustrative image for signup"
          />
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 p-10 flex justify-center items-center">
          <form
            className="w-full max-w-md p-8 bg-purple-50 border border-purple-300 rounded-xl shadow-lg shadow-purple-200/50 space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="text-center mb-6">
              <h1 className="text-3xl font-extrabold text-purple-700">Sign Up</h1>
            </div>

            {/* Name */}
            <div className="space-y-1">
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                Full Name:
              </label>
              <input
                className="w-full p-2 border border-purple-400 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out"
                type="text"
                id="fullname"
                name="fullname"
                placeholder="John Doe"
                required
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                className="w-full p-2 border border-purple-400 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out"
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password:
              </label>
              <input
                className="w-full p-2 border border-purple-400 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out"
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                onChange={handleChange}
              />
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <label htmlFor="c_password" className="block text-sm font-medium text-gray-700">
                Confirm Password:
              </label>
              <input
                className="w-full p-2 border border-purple-400 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out"
                type="password"
                id="c_password"
                name="c_password"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center pt-2">
              <input
                type="checkbox"
                id="agree_policy"
                name="agree_policy"
                className="text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                required
              />
              <label className="ml-2 text-xs text-gray-700" htmlFor="agree_policy">
                I agree with the{" "}
                <a href="#" className="ml-1 text-purple-600 hover:text-purple-800 font-medium transition duration-150">
                  Privacy and Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              className="w-full p-2 mt-6 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-150 ease-in-out font-semibold"
              type="submit"
            >
              Sign Up
            </button>

            {/*// Separator
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-xs text-gray-500">or continue with</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

           //Social Logins (Cleaned up as per the template) 
            <div className="flex justify-center space-x-4">
              <a
                className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full text-lg font-bold text-gray-700 hover:bg-pink-500 hover:text-white transition duration-150"
                href="#"
                aria-label="Continue with Google"
              >
                G
              </a>
              <a
                className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full text-lg font-bold text-gray-700 hover:bg-blue-500 hover:text-white transition duration-150"
                href="#"
                aria-label="Continue with Facebook"
              >
                F
              </a>
            </div> */}

            {/* Message */}
            {message && (
              <p className="text-center text-sm text-purple-600 mt-3 font-medium">
                {message}
              </p>
            )}

            {/* Login Link */}
            <p className="text-center text-sm mt-6 text-gray-600">
              Already have an account?{" "}
              <Link className="ml-1 text-purple-700 font-semibold hover:text-purple-900 transition duration-150" to="/login">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
