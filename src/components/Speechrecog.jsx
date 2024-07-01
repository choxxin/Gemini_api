import React, { useEffect } from "react";
import { useState } from "react";
import useConversation from "../Zustand/useconversation";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaMicrophoneAltSlash } from "react-icons/fa";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const SpeechRecognitionComponent = () => {
  const [Listening, setfirst] = useState(false);
  const { setRecognizedText } = useConversation();

  useEffect(() => {
    recognition.continuous = true;
    recognition.interimResults = true;

    let finalTranscript = ""; // Store final transcript across sessions

    recognition.onresult = (event) => {
      let interimTranscript = "";

      // Iterate through all the results from the current event

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript + " "; // Append final transcript
        } else {
          interimTranscript += event.results[i][0].transcript; // Update interim transcript
        }
      }

      // Update recognized text only when there's a final transcript
      if (finalTranscript.trim()) {
        setRecognizedText(finalTranscript.trim());
        finalTranscript = "";
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error detected: " + event.error);
    };

    recognition.onend = () => {
      console.log("Speech recognition service disconnected");
    };

    return () => {
      recognition.stop();
    };
  }, [setRecognizedText]);

  const startRecognition = () => {
    setfirst(true);
    recognition.start();
  };

  const stopRecognition = () => {
    recognition.stop();
    setfirst(false);
  };

  const handler = () => {
    if (Listening) {
      stopRecognition();
    } else {
      startRecognition();
    }
  };

  return (
    <div>
      <button onClick={handler} className="mr-3">
        {Listening ? (
          <FaMicrophoneAlt
            className={`h-9 w-9 hover:text-gray-800  
            text-green-500
           `}
          />
        ) : (
          <FaMicrophoneAltSlash className="h-9 w-9  hover:text-gray-800" />
        )}
        {/* <FaMicrophoneAlt
          className={`h-9 w-9 hover:text-gray-800  
            text-green-500
           `}
        /> */}
      </button>
      {/* <button onClick={stopRecognition}>
        <FaMicrophoneAltSlash className="h-9 w-9  hover:text-gray-800" />
      </button> */}
    </div>
  );
};

export default SpeechRecognitionComponent;
