import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://food-express-zpds.onrender.com/api/auth/login", form);

      setMessage(res.data.message);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 px-4 animate-fadeSlide">
      <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-orange-200 animate-scaleUp">

        {/* Logo / Title */}
        <h1 className="text-3xl font-bold text-center mb-2 text-orange-600">
          Food<span className="text-gray-800">Express</span>
        </h1>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Delivering happiness to your doorstep 🍔🚚
        </p>

        {/* Success / Error Message */}
        {message && (
          <div className="bg-green-100 text-green-700 p-3 rounded-md text-center mb-4 text-sm font-medium">
            {message}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-orange-300 outline-none"
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
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 pr-10 rounded-lg focus:ring focus:ring-orange-300 outline-none"
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


          <button
            type="submit"
            className="w-full bg-orange-600 text-white p-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition active:scale-95"
          >
            Login
          </button>
        </form>

        {/* Bottom Text */}
        <p className="mt-5 text-center text-gray-700 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-600 font-semibold hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
