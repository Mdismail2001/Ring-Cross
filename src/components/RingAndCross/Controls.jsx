const Controls = ({ onUndo, onRedo, onReset }) => {
  return (
    <div className="flex gap-3 mt-4">
      <button className="px-4 py-2 bg-yellow-500 text-white rounded" onClick={onUndo}>Undo</button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onRedo}>Redo</button>
      <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onReset}>Reset</button>
    </div>
  );
};
export default Controls;
