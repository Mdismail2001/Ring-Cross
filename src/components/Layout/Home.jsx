import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaGamepad } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [showRules, setShowRules] = useState(false);
  const [gameStarted, setGameStarted] = useState(false); // ✅ new state

  const handlePlay = () => {
    setGameStarted(true); // ✅ mark game started
    navigate("/login");   // go to login before game
  };

  const handleShowRules = () => {
    if (!gameStarted) {
      setShowRules(true);
    } else {
      alert("Game already started! Rules are not available now.");
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center overflow-hidden">
      
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

      {/* Buttons */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex gap-6 mt-10"
      >
        {/* Play Now */}
        <Link
          onClick={handlePlay}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-3 rounded-2xl font-bold text-lg shadow-lg hover:scale-110 transform transition"
        >
          <FaPlay /> Play Now
        </Link>

        {/* How to Play */}
        <button
          onClick={handleShowRules}
          className="flex items-center gap-2 border border-gray-400 px-6 py-3 rounded-2xl font-bold text-lg shadow-lg hover:bg-gray-800 hover:scale-110 transform transition"
        >
          <FaGamepad /> How to Play
        </button>
      </motion.div>

      {/* How to Play Modal */}
      {showRules && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white p-6 rounded-2xl w-96 shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4">How to Play</h2>
            <p className="mb-3">1. Choose your symbol: Ring (O) or Cross (X).</p>
            <p className="mb-3">2. Take turns placing your symbol on the board.</p>
            <p className="mb-3">3. The first to get 3 in a row wins!</p>
            <p className="mb-3">4. Challenge your friends and aim for the leaderboard.</p>

            <button
              onClick={() => setShowRules(false)}
              className="mt-4 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

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
