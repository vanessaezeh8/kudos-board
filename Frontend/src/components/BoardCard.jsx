import { Link } from "react-router-dom";

function BoardCard({ board, onDelete }) {
  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this board?"
    );
    if (!confirmed) return;
    try {
      await fetch(`${import.meta.env.VITE_BASE_URL}/boards/${board.id}`, {
        method: "DELETE",
      });
      onDelete(board.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="board-card">
      <img
        src={`https://picsum.photos/id/${
          board.id + Math.floor(Math.random() + 500)
        }/200`}
        alt={board.title}
      />
      <h3>{board.title}</h3>
      <Link to={`/board/${board.id}`}>View Board</Link>
      <button
        type="button"
        className="delete-board-button"
        onClick={handleDelete}
      >
        Delete Board
      </button>
    </div>
  );
}

export default BoardCard;
