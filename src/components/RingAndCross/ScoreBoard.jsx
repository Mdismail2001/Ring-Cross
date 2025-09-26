const ScoreBoard = ({ scores }) => {
  return (
    <div className="flex justify-around w-full mt-4">
      <p className="text-lg font-semibold text-blue-600">X: {scores.X}</p>
      <p className="text-lg font-semibold text-pink-600">O: {scores.O}</p>
      <p className="text-lg font-semibold text-gray-700">Draws: {scores.draws}</p>
    </div>
  );
};
export default ScoreBoard;
