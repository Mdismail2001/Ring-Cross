import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaEnvelope, FaUserPlus, FaImage } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
const handleRegister = (e) => {
  e.preventDefault();

  const form = e.target;

  const name = form.name.value;
  const email = form.email.value;
  const photo = form.photo.value;
  const password = form.password.value;

  console.log({ name, email, photo, password });
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      
      {/* Background glowing circles */}
      <div className="absolute w-[700px] h-[700px] bg-pink-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-700 rounded-full blur-3xl opacity-20 animate-ping"></div>

      {/* Register Card */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-[90%] max-w-md"
      >
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-pink-400 drop-shadow-md mb-6">
          Create Account
        </h2>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">
              Username
            </label>
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">
              Photo URL
            </label>
            <div className="relative">
              <FaImage className="absolute top-3 left-3 text-gray-400" />
              <input
                type="url"
                placeholder="Paste your photo URL"
                name="photo"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-600 transition"
              />
            </div>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 rounded-lg shadow-lg transition"
          >
            <FaUserPlus /> Register
          </motion.button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-400 hover:underline cursor-pointer">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
