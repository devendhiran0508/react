const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config(); // Ensure environment variables are loaded
console.log("API Key Loaded:", process.env.GEMINI_API_KEY ? "Yes, key starts with " + process.env.GEMINI_API_KEY.substring(0,5) : "No, key not found!"); // Don't log the whole key!

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function testGemini() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    // Corrected request format
    const response = await model.generateContent(["Hello, world!"]);

    // Check if response contains candidates
    if (!response.candidates || response.candidates.length === 0) {
      throw new Error("No candidates returned from Gemini API.");
    }

    // Correct way to access generated text
    const generatedText = response.candidates[0]?.content?.parts[0]?.text || "No response received.";

    console.log("Response:", generatedText);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

testGemini();
