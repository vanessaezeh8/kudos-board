import { useEffect, useState } from "react";
import BoardCard from "../components/BoardCard.jsx";
import CreateBoardForm from "../components/createBoardForm.jsx";

function Home() {
  const [boards, setBoards] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchBoards();
  }, [search, category]);

  const fetchBoards = async () => {
    try {
        const query = new URLSearchParams();
        if (search) query.append('search', search);
        if (category && category !== 'All') query.append('category', category);

        const response = await fetch(`http://localhost:3000/api/boards?${query.toString()}`);
        const data = await response.json();
        setBoards(data);
    } catch (error) {
        console.error(error);
    }
};
const handleBoardDelete = (deletedId) => {
    setBoards(boards.filter(board => board.id !== deletedId));
};

return (
    <div>
        <h1> Kudos Boards</h1>
        <div className="search-bar">
            <input type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All</option>
            <option value="Recent">Recent</option>
            <option value="Celebration">Celebration</option>
            <option value="Thank you">Thank you</option>
            <option value="Inspiration">Inspiration</option>
        </select>
        </div>
        <CreateBoardForm onBoardCreated = {fetchBoards}/>
        <div className="board-grid">
        {boards.map(board => (
            <BoardCard key={board.id} board={board} onDelete={handleBoardDelete}/>
        ))}
        </div>
    </div>
);
}

export default Home;
