import { useState } from "react";

function CreateForm({ boardId, onCardCreated }) {
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");
  const [gifQuery, setGifQuery] = useState("");
  const [gifResult, setGifResult] = useState([]);
  const [selectedGif, setSelectedGif] = useState("");

  const handleGifSearch = async () => {
    const apikey = import.meta.env.VITE_GIPHY_API_KEY;
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${gifQuery}&limit=5&offset=0&rating=g&lang=en`
      );
      const data = await response.json();
      setGifResult(data.data);
    } catch (error) {
      console.error("GIF search Failed: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message || !selectedGif || !boardId) {
      alert("Message, GIF and boardId are required");
      return;
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          gifUrl: selectedGif,
          author,
          boardId: parseInt(boardId),
        }),
      });
      const newCard = await response.json();
      onCardCreated(newCard);
      setMessage("");
      setAuthor("");
      setGifQuery("");
      setGifResult([]);
      setSelectedGif("");
    } catch (error) {
      console.error("Card creation failed: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <h3>Add a Card</h3>
      <input
        type="text"
        placeholder="Enter a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author(Optional)"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <div>
        <input
          type="text"
          placeholder="Search for a GIF"
          value={gifQuery}
          onChange={(e) => setGifQuery(e.target.value)}
        />
        <button type="button" onClick={handleGifSearch}>
          Search GIF
        </button>
      </div>
      <div className="gif-results">
        {gifResult.map((gif) => (
          <img
            key={gif.id}
            src={gif.images.fixed_height.url}
            alt={gif.title}
            onClick={() => setSelectedGif(gif.images.fixed_height.url)}
          />
        ))}
      </div>
      {selectedGif && (
        <div>
          <p>Selected GIF:</p>
          <img src={selectedGif} alt="selected gif" />
        </div>
      )}
      <button type="submit">Add Card</button>
    </form>
  );
}

export default CreateForm;
