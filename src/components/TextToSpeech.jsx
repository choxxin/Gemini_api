// import React, { useState, useEffect, useCallback } from "react";
// import useConversation from "../Zustand/useconversation";
// const synth = window.speechSynthesis;

// const VoiceSelector = ({ selected, setSelected }) => {
//   const [voices, setVoices] = useState([]);

//   const populateVoiceList = useCallback(() => {
//     const newVoices = synth.getVoices();
//     setVoices(newVoices);
//   }, []);

//   useEffect(() => {
//     populateVoiceList();
//     if (synth.onvoiceschanged !== undefined) {
//       synth.onvoiceschanged = populateVoiceList;
//     }
//   }, [populateVoiceList]);

//   return (
//     <select
//       value={selected}
//       onChange={(e) => setSelected(parseInt(e.target.value))}
//     >
//       {voices.map((voice, index) => (
//         <option key={index} value={index}>
//           {voice.name} ({voice.lang}) {voice.default && " [Default]"}
//         </option>
//       ))}
//     </select>
//   );
// };

// const TextToSpeech = () => {
//   const { selectedConversation } = useConversation();
//   const [selectedVoice, setSelectedVoice] = useState(0);

//   if (!synth) {
//     return <span>Aw... your browser does not support Speech Synthesis</span>;
//   }
//   useEffect(() => {
//     speak();
//   }, [selectedConversation]);

//   const speak = (e) => {
//     // e.preventDefault();

//     const utterance = new SpeechSynthesisUtterance(selectedConversation);
//     utterance.voice = synth.getVoices()[selectedVoice];

//     synth.speak(utterance);
//   };
//   const stopSpeaking = () => {
//     synth.cancel(); // Stop speech synthesis
//     // Update state to indicate not speaking
//   };

//   return (
//     <form>
//       {" "}
//       <button type="submit">Speak</button>
//       {speaking && <button onClick={stopSpeaking}>Stop Speaking</button>}
//     </form>
//   );
// };

// export default TextToSpeech;
import { IoVolumeMute } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import useConversation from "../Zustand/useconversation";
const synth = window.speechSynthesis;

const TextToSpeech = () => {
  const { selectedConversation } = useConversation();
  const [selectedVoice, setSelectedVoice] = useState(0);
  const [speaking, setSpeaking] = useState(false); // Track speech synthesis state

  // useEffect(() => {
  //   if (speaking) {
  //     speak(); // Start speaking when selectedConversation changes
  //   }
  // }, [selectedConversation]);

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(selectedConversation);
    utterance.voice = synth.getVoices()[selectedVoice];

    synth.speak(utterance);
    setSpeaking(true); // Update state to indicate speaking
  };
  useEffect(() => {
    speak(); // Start speaking when selectedConversation changes
  }, [selectedConversation]);
  const stopSpeaking = () => {
    synth.cancel(); // Stop speech synthesis
    setSpeaking(false); // Update state to indicate not speaking
  };
  // useEffect(() => {
  //   speak();
  // }, [selectedConversation]);

  return (
    <form>
      {/* <button onClick={speak}>Speak</button> */}
      {speaking && (
        <button onClick={stopSpeaking}>
          <IoVolumeMute className="h-9 w-9" />
        </button>
      )}
    </form>
  );
};

export default TextToSpeech;
