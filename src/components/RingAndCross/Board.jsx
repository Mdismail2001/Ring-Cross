
import Square from './Square';

const Board = ({ squares, onClick }) => {
  // console.log(squares)

  return (
    <div className="grid grid-cols-3 gap-2 ">
      {squares.map((val, idx) => (
        <Square key={idx} value={val} onClick={() => onClick(idx)} />
      ))}
      
    </div>
  );
};
export default Board;
