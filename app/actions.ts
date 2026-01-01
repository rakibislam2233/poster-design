"use server";

import { GoogleGenAI } from "@google/genai";

export async function generateScoutQuoteAction(name: string, rank: string) {
  const apiKey = process.env.API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) {
    return "Wishing you a New Year filled with scouting adventure and service. Be Prepared!";
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Generate a 1-sentence New Year 2026 scout greeting for ${name}, who is a ${rank}. Use scout values like service, preparation, or adventure. Keep it under 20 words.`,
      config: { temperature: 0.8 },
    });

    return (
      response.text?.trim().replace(/^"|"$/g, "") ||
      "Be Prepared for an amazing year of scouting adventure in 2026!"
    );
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Wishing you a New Year filled with scouting adventure and service. Be Prepared!";
  }
}
