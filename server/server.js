import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import aiAssistantResponse from "./services/aiAssistant.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Serving is running..");
});

app.post("/api/policy-assistant", async (req, res) => {
  const { conversation } = req.body;

  if (
    !Array.isArray(conversation) ||
    !conversation.every(
      (msg) =>
        (typeof msg.content === "string" && msg.role === "user") ||
        msg.role === "assistant"
    )
  ) {
    return res.status(400).json({ error: "Error! Invalid Message" });
  }

  try {
    const questionCount = conversation.filter(
      (message) => message.role === "assistant"
    ).length;

    const aiMessage = await aiAssistantResponse(conversation, questionCount);

    res.json({ reply: aiMessage });
  } catch (error) {
    console.error("Error generating response", error);
    res.status(500).json({ error: "Failed to generate a response from Tina" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
