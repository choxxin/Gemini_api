import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import useGemini from "../hooks/useGemini";
import useConversation from "../Zustand/useconversation";
import TextToSpeech from "./TextToSpeech";
import SpeechRecognitionComponent from "./Speechrecog";
function Search() {
  const { recognizedText, setRecognizedText } = useConversation();
  console.log(recognizedText);
  const { gem, Loader } = useGemini();
  const [prompt, setprompt] = useState("");

  useEffect(() => {
    // Update prompt with recognizedText when it changes
    if (recognizedText) {
      setprompt(recognizedText);
    }
  }, [recognizedText]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    await gem(prompt);
    setRecognizedText("");
    setprompt("");
  };

  // useEffect(() => {
  //   setprompt({ ...prompt }, recognizedText);
  // }, [recognizedText]);
  return (
    <div className="flex bg-white min-h-36 min-w-8">
      <textarea
        className="textarea textarea-bordered w-96 min-w-20
        "
        placeholder="Ask anything ..."
        value={prompt}
        onChange={(e) => setprompt(e.target.value)}
      ></textarea>
      {Loader ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : (
        <CiSearch
          className="h-12 w-12 ml-4 text-green-600  hover:text-gray-800"
          onClick={handlesubmit}
        />
      )}

      {/* <TextToSpeech className="ml-5" /> */}
      <SpeechRecognitionComponent />
    </div>
  );
}

export default Search;
