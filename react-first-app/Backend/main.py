from fastapi import FastAPI, Query, HTTPException
from pydantic import BaseModel, Field
from typing import List
import openai
import os
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS setup (allow all origins for development)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load OpenAI API key from environment variable
openai.api_key = os.getenv("OPENAI_API_KEY")

# Request Model
class StoryRequest(BaseModel):
    genre: str = Field(..., description="The genre of the story (e.g., mystery, sci-fi, romance).")
    keywords: List[str] = Field(..., description="A list of keywords or themes for the story.")
    episodic: bool = Field(False, description="Whether the story should be split into episodes.")

@app.post("/generate-story")
def generate_story(request: StoryRequest):
    # Validate genre (optional: you can restrict valid genres)
    allowed_genres = {"mystery", "sci-fi", "romance", "fantasy", "horror"}
    if request.genre.lower() not in allowed_genres:
        raise HTTPException(status_code=400, detail=f"Invalid genre. Choose from: {', '.join(allowed_genres)}")

    # Construct prompt
    prompt = f"Write a {request.genre} story based on these themes: {', '.join(request.keywords)}."
    if request.episodic:
        prompt += " Split the story into episodes with clear breaks."

    try:
        # Call OpenAI API
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a creative storyteller."},
                {"role": "user", "content": prompt},
            ],
        )
        return {"story": response['choices'][0]['message']['content']}
    except openai.error.OpenAIError as e:
        raise HTTPException(status_code=500, detail=f"Error communicating with OpenAI API: {str(e)}")
