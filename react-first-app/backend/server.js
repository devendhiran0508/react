require('dotenv').config(); // <-- add this at the very top

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});