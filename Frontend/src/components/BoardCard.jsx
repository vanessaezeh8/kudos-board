import {Link} from 'react-router-dom';

function BoardCard({board}) {
  return (
    <div className="board-card">
      <img
      src = {`https://picsum.photos/id/${board.id + Math.floor(Math.random() + 500)}/200`}
      alt = {board.title}/>
      <h3>{board.title}</h3>
      <Link to={`/board/${board.id}`}>View Board</Link>
    </div>
  );
}

export default BoardCard;
