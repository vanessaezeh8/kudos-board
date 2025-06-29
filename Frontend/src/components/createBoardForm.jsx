import { useState } from "react";

function CreateBoardForm({ onBoardCreated }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !category) {
      alert("Please enter a title and category");
      return;
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/boards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, category, author }),
      });
      // const data = await response.json();
      onBoardCreated();
      setTitle("");
      setCategory("");
      setAuthor("");
    } catch (error) {
      console.error("Error creating board:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="create-board-form">
      <h2>Create a new board</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a title"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select a category</option>
        <option value="Celebration">Celebration</option>
        <option value="ThankYou">Thank You</option>
        <option value="Inspiration">Inspiration</option>
      </select>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author(Optional)"
      />
      <button type="submit">Create Board</button>
    </form>
  );
}

export default CreateBoardForm;
