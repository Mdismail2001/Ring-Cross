import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { username, password });
    // TODO: Add authentication logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      
      {/* Background glowing circles */}
      <div className="absolute w-[700px] h-[700px] bg-purple-700 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-pink-600 rounded-full blur-3xl opacity-20 animate-ping"></div>

      {/* Login Card */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-[90%] max-w-md"
      >
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-purple-400 drop-shadow-md mb-6">
          Ring & Cross Login
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Username */}
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-3 rounded-lg shadow-lg transition"
          >
            <FaSignInAlt /> Login
          </motion.button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <Link to ='/register' className="text-purple-400 hover:underline cursor-pointer">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
