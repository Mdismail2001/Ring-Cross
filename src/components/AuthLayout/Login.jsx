import React, { use, useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {login} = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log( { email, password });
    login(email, password)
    .then(result =>{
        // console.log(result);
        navigate('/')
    })
    .catch(error =>{
        console.log(error)
    })
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
              type="email"
              placeholder="Email"
              name="email"
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
              name="password"
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
