// import { create } from "zustand";

// const useConversation = create((set) => ({
//   selectedConversation: "",
//   recognizedText: "",

//   setSelectedConversation: (selectedConversation) =>
//     set({ selectedConversation }),
//   setRecognizedText: (recognizedText) => set({ recognizedText }),
// }));

// export default useConversation;
import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: "",
  recognizedText: "",

  setSelectedConversation: (selectedConversation) =>
    set((state) => ({ selectedConversation: selectedConversation })),

  setRecognizedText: (recognizedText) =>
    set((state) => ({ recognizedText: recognizedText })),
}));

export default useConversation;
