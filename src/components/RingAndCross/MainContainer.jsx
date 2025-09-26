import { useState, useContext } from "react";
import Board from "./Board";
import StatusBar from "./StatusBar";
import ScoreBoard from "./ScoreBoard";
import Controls from "./Controls";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router";

const MainContainer = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("Next player: X");

  const { user, setUser } = useContext(AuthContext); //  get user + logout
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // clear user
    navigate('/')

  };

  const handleClick = (i) => {
    if (squares[i]) return;

    const newSquares = [...squares];
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);

    const winner = calculateWinner(newSquares);
    if (winner) {
      setStatus(`Winner: ${winner}`);
      setScores({
        ...scores,
        [winner]: scores[winner] + 1,
      });
    } else if (!newSquares.includes(null)) {
      setStatus("It's a draw!");
      setScores({ ...scores, draws: scores.draws + 1 });
    } else {
      setXIsNext(!xIsNext);
      setStatus(`Next player: ${xIsNext ? "O" : "X"}`);
    }
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setStatus("Next player: X");
    setXIsNext(true);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* ✅ Top-right corner */}
      <div className="absolute top-4 right-6 flex items-center gap-3">
        {user && <span className="text-gray-700 text-sm">{user.email}</span>}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-2 rounded-lg shadow"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-4">Ring & Cross Game</h1>
      <Board squares={squares} onClick={handleClick} />
      <StatusBar status={status} />
      <ScoreBoard scores={scores} />
      <Controls onUndo={() => {}} onRedo={() => {}} onReset={handleReset} />
    </div>
  );
};

// winner check helper
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // cols
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default MainContainer;
