import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

let ai: GoogleGenAI | null = null;

const getAIInstance = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  if (!ai && apiKey) {
    ai = new GoogleGenAI({ apiKey });
  }

  return ai;
};

export const generateResponse = async (userMessage: string): Promise<string> => {
  const instance = getAIInstance();
  if (!instance) {
    return "I'm sorry, my AI brain is currently offline (API Key missing). Please contact Chandan directly via email.";
  }

  try {
    const response = await instance.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: RESUME_CONTEXT,
      },
    });

    return response.text || "I apologize, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong while thinking. Please try again.";
  }
};