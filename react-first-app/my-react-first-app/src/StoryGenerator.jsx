import React, { useState } from "react";
import './StoryGenerator.css';

function StoryGenerator() {
  const [genre, setGenre] = useState("mystery");
  const [keywords, setKeywords] = useState("");
  const [episodic, setEpisodic] = useState(false);
  const [story, setStory] = useState("");

  const handleGenerate = async () => {
    const response = await fetch("http://localhost:8000/generate-story", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ genre, keywords: keywords.split(","), episodic }),
    });
    const data = await response.json();
    setStory(data.story);
  };

  return (
    <div>
      <h1>Story Generator</h1>
      <label>Genre: </label>
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="mystery">Mystery</option>
        <option value="sci-fi">Sci-Fi</option>
        <option value="romance">Romance</option>
      </select>
      <br />
      <label>Keywords: </label>
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="e.g., detective, spaceship"
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={episodic}
          onChange={(e) => setEpisodic(e.target.checked)}
        />
        Episodic
      </label>
      <br />
      <button onClick={handleGenerate}>Generate Story</button>
      <hr />
      <h2>Generated Story</h2>
      <p>{story}</p>
    </div>
  );
}

export default StoryGenerator;
