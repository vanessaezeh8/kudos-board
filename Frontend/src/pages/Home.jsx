import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import BoardCard from "../components/BoardCard.jsx";
import CreateBoardForm from "../components/createBoardForm.jsx";

function Home() {
  const [boards, setBoards] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchBoards();
  }, [search, category]);

  const fetchBoards = async () => {
    try {
      const query = new URLSearchParams();
      if (search) query.append("search", search);
      if (category && category !== "All") query.append("category", category);

      const response = await fetch(
        `http://localhost:3000/boards?${query.toString()}`
      );
      console.log(response);
      const data = await response.json();
      setBoards(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClearSearch = () => {
    setSearch("");
    setCategory("All");
    fetchBoards();
  };

  const handleBoardDelete = (deletedId) => {
    setBoards(boards.filter((board) => board.id !== deletedId));
  };

  return (
    <div>
      <Header />
      <div className="banner">
        <h2>Welcome to KudoBoard 🎉</h2>
        <p>Celebrate and share kudos with your team</p>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search boards..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={fetchBoards}>Search</button>
        <button onClick={handleClearSearch}>Clear</button>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Recent">Recent</option>
          <option value="Celebration">Celebration</option>
          <option value="Thank you">Thank you</option>
          <option value="Inspiration">Inspiration</option>
        </select>
        <button onClick={() => setShowModal(true)} className="create-btn">
          Create Board
        </button>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <CreateBoardForm
              onBoardCreated={() => {
                fetchBoards();
                setShowModal(false);
              }}
            />
            <button onClick={() => setShowModal(false)} className="close-modal">
              X
            </button>
          </div>
        </div>
      )}
      <div className="board-grid">
        {boards.map((board) => (
          <BoardCard
            key={board.id}
            board={board}
            onDelete={handleBoardDelete}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
