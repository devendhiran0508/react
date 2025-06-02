// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");

// Initialize the app
const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// OpenAI API configuration
const configuration = new Configuration({
  apiKey: "YOUR_OPENAI_API_KEY", // Replace with your OpenAI API key
});
const openai = new OpenAIApi(configuration);

// Endpoint to generate a story
app.post("/generate-story", async (req, res) => {
  const { genre, keywords, episodic } = req.body;

  if (!genre) {
    return res.status(400).json({ error: "Genre is required." });
  }

  try {
    const prompt = `Generate a ${episodic ? "multi-episode" : "standalone"} story in the ${genre} genre. Include these keywords: ${keywords.join(", ")}. Make it engaging and creative.`;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 500,
      temperature: 0.7,
    });

    const story = response.data.choices[0].text.trim();
    res.json({ story });
  } catch (error) {
    console.error("Error generating story:", error);
    res.status(500).json({ error: "Failed to generate story." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
