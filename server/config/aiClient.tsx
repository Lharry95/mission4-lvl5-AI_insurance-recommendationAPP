import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

// if API key is missing
if (!process.env.GEMINI_API_KEY) {
  throw new Error(
    "ERROR! The GEMIMNI_API_KEY is missing in environment variables"
  );
}

export const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});
