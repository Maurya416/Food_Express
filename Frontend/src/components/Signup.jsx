import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData
      );

      setMessage(res.data.message || "Account created successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 px-4 animate-fadeSlide">
      <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-orange-200 animate-scaleUp">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-center mb-2 text-orange-600">
          Food<span className="text-gray-800">Express</span>
        </h1>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Join us and start your food journey 🍕✨
        </p>

        {/* Message */}
        {message && (
          <div className="bg-green-100 text-green-700 p-3 rounded-md text-center mb-4 text-sm font-medium">
            {message}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSignup} className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-orange-300 outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-orange-300 outline-none"
              placeholder="example@gmail.com"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 pr-10 rounded-lg focus:ring focus:ring-orange-300 outline-none"
              placeholder="Choose a strong password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/50 flex items-center justify-center text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white p-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition active:scale-95"
          >
            Sign Up
          </button>
        </form>

        {/* Bottom Text */}
        <p className="mt-5 text-center text-gray-700 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
