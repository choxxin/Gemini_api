import React, { useCallback } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState, useEffect } from "react";
import LLMOutput from "../components/Output";
import useConversation from "../Zustand/useconversation";
function useGemini() {
  const [Loader, setLoader] = useState(false);
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [answer, setanswer] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY; // Use import.meta.env for Vite
  //   // Access your API key as an environment variable (see "Set up your API key" above)
  //   const genAI = new GoogleGenerativeAI(process.env.API_KEY);

  //   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const gem = useCallback(
    async (promptt) => {
      setLoader(true);
      try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = promptt;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text(); // Await the text extraction
        setanswer(text);
        setSelectedConversation(text);
        console.log(text);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    },
    [API_KEY]
  );

  return { gem, answer, Loader };
}

export default useGemini;
