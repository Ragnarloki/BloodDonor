import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    naae: '',
    password: '',
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
 
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const apiUrl = import.meta.env.VITE_API_Backend;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}api/users/login`, formData);
      // Assuming you get a token in the response
      localStorage.setItem('token', response.data.token);
      setErrorMessage('');
      window.location.href = '/'; // Redirect to the home page
    } catch (error) {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className='bg-gray-100 '>
    {/* <div className="flex justify-center items-center h-[670px] bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6  bg-white rounded shadow w-96">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <div className="mb-4">
          <label className="block text-sm font-medium">name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div> */}




    <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 shadow-lg rounded-lg w-96">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Login</h2>

                {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2">name</label>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500"
                            value={formData.name}
                            onChange={handleChange}
                             required
                        />
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm mb-2">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500 pr-10"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded transition duration-300"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm text-gray-600 text-center mt-4">
                    Don't have an account?{" "}
                    <a href="/register" className="text-blue-500 font-semibold hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    </div>


      );
};

export default Login;
