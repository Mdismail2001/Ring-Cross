const Square = ({ value, onClick }) => {
  // console.log(value, onClick)
  return (
    <button
      className="w-20 h-20 flex items-center justify-center text-3xl font-bold border rounded-lg bg-white hover:bg-gray-200"
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Square;
