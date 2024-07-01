import React, { useEffect, useState } from "react";
import useGemini from "../hooks/useGemini";
import useConversation from "../Zustand/useconversation";
import TextToSpeech from "./TextToSpeech";
const LLMOutput = () => {
  const { selectedConversation } = useConversation();
  // let { answer, gem } = useGemini();
  // useEffect(() => {
  //   console.log("LLMOutput: answer updated", answer);
  // }, [answer]);

  return (
    <div className="container mx-auto p-4   ">
      <label htmlFor="llmOutput" className="block text-gray-700 font-bold mb-2">
        LLM Output: <TextToSpeech />
      </label>
      <textarea
        id="llmOutput"
        className="w-full  h-96 p-2 border border-gray-100 rounded-md resize-y"
        value={selectedConversation}
        readOnly={true}
      />
    </div>
  );
};

export default LLMOutput;
