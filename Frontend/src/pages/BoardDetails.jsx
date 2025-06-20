import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CreateForm from "../components/CreateForm";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const BoardDetails = () => {
  let { boardId } = useParams();
  const [board, setBoard] = useState(null);
  const [count, setCount] = useState(0);
  const [showCardModal, setShowCardModal] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [sortCards, setSortCards] = useState([]);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        console.log("Fetching a board", boardId);
        boardId = Number(boardId);
        console.log(typeof boardId);
        const response = await fetch(`http://localhost:3000/boards/${boardId}`);
        console.log(response);
        const data = await response.json();
        setBoard(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBoard();
  }, [boardId]);

  useEffect(() => {
    if (board?.cards) {
      const sortedCards = [...board.cards].sort((a, b) => {
        if (a.pinned && !b.pinned) {
          return new Date(b.pinnedAt) - new Date(a.pinnedAt);
        }
        if (a.pinned) return -1;
        if (b.pinned) return 1;
        return 0;
      });
      setSortCards(sortedCards);
    }
  }, [board]);

  const handleCardDelete = async (cardId) => {
    console.log("Deleting cardId", cardId);
    try {
      const response = await fetch(`http://localhost:3000/cards/${cardId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setBoard((prev) => ({
          ...prev,
          cards: prev.cards.filter((c) => c.id !== cardId),
        }));
      }
    } catch (error) {
      console.error("Error deleting", error);
    }
  };

  const onCardCreated = (newCard) => {
    setBoard((prev) => ({
      ...prev,
      cards: [...prev.cards, newCard],
    }));
  };

  const handlePin = async (cardId) => {
    try {
      const response = await fetch(`http://localhost:3000/cards/${cardId}/pin`, {
        method: "PUT",
      });
      const updatedCard = await response.json();
      setBoard((prev) => ({
        ...prev,
        cards: prev.cards.map((c) => (c.id === cardId ? updatedCard : c)),
      }));
    } catch (error) {
      console.error("Error pinning", error);
    }
  };



  if (!board) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={toggleTheme}>
        {darkMode ? " Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <h1>{board.title}</h1>
      <p>Category: {board.category}</p>
      <p>Author: {board.author || "Anonymous"}</p>
      <button onClick={() => setShowCardModal(true)}>Create a Card</button>
      {showCardModal && (
        <div className="modal-overlay" onClick={() => setShowCardModal(False)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <CreateForm boardId={boardId} onCardCreated={onCardCreated} />
            <button
              onClick={() => setShowCardModal(false)}
              className="close-modal"
            >
              X
            </button>
          </div>
        </div>
      )}
      <h2>Cards</h2>
      <div className="card-grid">
        {sortCards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.gifUrl} alt="GIF" />
            <p>{card.message}</p>
            <p>{card.author}</p>
            <div className="card-actions">
              <button onClick={() => setCount(count + 1)}>
                Upvote:: {count}
              </button>
              <button onClick={() => handlePin(card.id)}>
                {card.pinned ? "Unpin" : "Pin"}
              </button>
              <button
                className="delete-board-button"
                onClick={() => handleCardDelete(card.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardDetails;
