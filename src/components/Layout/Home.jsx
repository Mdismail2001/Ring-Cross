import React, { useContext } from "react";  // <-- correct hook
import { motion } from "framer-motion";
import { FaPlay, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Home = () => {
  const { user, setUser, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => setUser(null)) 
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Top-right user info */}
      <div className="absolute top-4 right-6 flex items-center gap-4">
        {user ? (
          <>
            <span className="text-sm text-gray-300">{user.email}</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-2 rounded-lg shadow"
            >
              <FaSignOutAlt /> Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="text-sm bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg shadow"
          >
            Login
          </Link>
        )}
      </div>

      {/* Background animated circles */}
      <div className="absolute w-[800px] h-[800px] bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute w-[600px] h-[600px] bg-blue-600 rounded-full blur-3xl opacity-20 animate-ping"></div>

      {/* Game Title */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-extrabold tracking-wider text-center drop-shadow-lg"
      >
        Ring & Cross
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl mt-4 text-gray-300 text-center max-w-xl"
      >
        A modern twist of the classic Tic Tac Toe. Play, compete, and rule the board!
      </motion.p>

      {/* Play Now button */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-10"
      >
        { user ? <Link
          to= '/play'  // <-- now works correctly
          className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-3 rounded-2xl font-bold text-lg shadow-lg hover:scale-110 transform transition"><FaPlay /> Play Now
        </Link> : <Link
          to= '/login'  // <-- now works correctly
          className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-3 rounded-2xl font-bold text-lg shadow-lg hover:scale-110 transform transition"><FaPlay /> login for play
        </Link>
        }

      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 text-sm text-gray-400"
      >
        © 2025 Ring & Cross. All rights reserved.
      </motion.footer>
    </div>
  );
};

export default Home;
