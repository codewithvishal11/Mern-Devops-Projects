import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ import useNavigate
import { AuthContext } from '../../context/AuthContext';
import loginimg from '../../assets/login.jpg';

function LoginForm() {
  const navigate = useNavigate(); // ✅ initialize navigate
  const auth= useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

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
      await auth?.login(formData.email, formData.password);
      setMessage("Login successful!");
      setFormData({
        email: '',
        password: '',
      });
      setTimeout(() => navigate("/"), 1500); // ✅ now navigate works
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-50'>
      <div className='flex w-full max-w-6xl mx-auto shadow-2xl rounded-2xl overflow-hidden bg-white'>
        <div className='hidden lg:flex w-1/2 p-4 justify-center items-center bg-purple-50'>
          <img
            className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            src={loginimg}
            alt="An illustrative image for login"
          />
        </div>

        <div className="w-full lg:w-1/2 p-10 flex justify-center items-center">
          <form
            className="w-full max-w-md p-8 bg-purple-50 border border-purple-300 rounded-xl shadow-lg shadow-purple-200/50 space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="text-center mb-6">
              <h1 className="text-3xl font-extrabold text-purple-700">Log In</h1>
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                className="w-full p-2 border border-purple-400 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out"
                type="email"
                id='email'
                name='email'
                placeholder='you@example.com'
                required
                onChange={handleChange}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
              <input
                className="w-full p-2 border border-purple-400 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition duration-150 ease-in-out"
                type="password"
                id='password'
                name='password'
                placeholder='••••••••'
                required
                onChange={handleChange}
              />
            </div>

            <div className='flex justify-between items-center text-sm'>
              <div className='flex items-center'>
                <input
                  type="checkbox"
                  id='show_pwd'
                  name='show_pwd'
                  className='text-purple-600 focus:ring-purple-500 border-gray-300 rounded'
                />
                <label className="ml-2 text-gray-700" htmlFor="show_pwd">Show Password</label>
              </div>
              <div>
                <Link className="text-xs text-purple-600 hover:text-purple-800 font-medium transition duration-150 ease-in-out" to="/login/forgot-password">
                  Forgot Password?
                </Link>
              </div>
            </div>

            <button
              className="w-full p-2 mt-6 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-150 ease-in-out font-semibold"
              type="submit"
            >
              Log In
            </button>

            {/* Message */}
            {message && (
              <p className="text-center text-sm text-purple-600 mt-3 font-medium">
                {message}
              </p>
            )}

            <p className="text-center text-sm mt-6 text-gray-600">
              Don't have an account?
              <Link className='ml-1 text-purple-700 font-semibold hover:text-purple-900 transition duration-150' to="/signup">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
