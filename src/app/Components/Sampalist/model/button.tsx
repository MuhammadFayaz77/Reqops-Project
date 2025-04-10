"use client";
import React, { useState } from "react";
import { ChatModal } from ".";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="fixed bottom-5 right-5 bg-[#E33C12] text-white px-9 py-2 rounded-full shadow-lg"
        onClick={toggleModal}
      >
        <span>AI Model</span>
      </button>
      {isOpen && <ChatModal show={isOpen} onClose={toggleModal} />}
    </div>
  );
}

export default App;