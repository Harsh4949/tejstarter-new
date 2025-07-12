import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Rocket } from 'lucide-react';
// import Lottie from 'lottie-react';
// import loginAnimation from '../lottie/login.json.json'; // File doesn't exist yet

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      if (!formData.email || !formData.password) throw new Error('Please fill in all fields');
      if (!formData.email.includes('@')) throw new Error('Please enter a valid email address');
      console.log('Login success:', formData);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Left Side Animation Placeholder */}
        <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-100 to-white p-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <Rocket className="h-24 w-24 text-white animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Welcome to TejStarter</h3>
            <p className="text-gray-500">Your journey begins here</p>
          </div>
        </div>

        {/* Right Side Login Form */}
        <div className="p-10 sm:p-12">
          <div className="text-center mb-6">
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                TEJSTARTER
              </h1>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Welcome back</h2>
            <p className="text-gray-500 text-sm">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-xl py-2.5 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-sm text-red-600">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          {/* Sign Up Redirect */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <button onClick={() => navigate('/signup')} className="text-indigo-600 hover:underline">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
