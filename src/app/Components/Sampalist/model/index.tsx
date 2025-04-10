"use client";
import { X, Trash, Send, Smile } from "lucide-react";
import React from "react";

interface Message {
  sender: string;
  text: string;
}

const messages: Message[] = [
  { sender: "user", text: "Hello!" },
  { sender: "bot", text: "Hello Fayaz" },
  { sender: "user", text: "kya ho rha h ajk kal" },
  { sender: "bot", text: "Great!" },
  { sender: "user", text: "hn ksyu hgdg ajdhjk" },
  { sender: "bot", text: "Request whatever you validation." },
];

export function ChatModal({ show, onClose }: { show: boolean; onClose: () => void }) {
  if (!show) return null;

  return (
    <div
      className="bottom-12 fixed inset-0 flex items-end sm:items-center justify-end p-4  bg-opacity-30"
      onClick={onClose} 
    >
      <div
        className="bg-white rounded-2xl shadow-lg w-[90%] sm:w-96 max-h-[80vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">AI Bot Model</h2>
          <div className="flex space-x-3">
           
            <button className="text-gray-500 hover:text-black" onClick={onClose}>
              <X size={22} />
            </button>
          </div>
        </div>

     
        <div className="p-4 flex-1 overflow-y-auto space-y-3 bg-gray-100">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`p-3 rounded-lg flex items-start space-x-2 ${
                  msg.sender === "user"
                    ? "bg-slate-300"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                {msg.sender === "bot" && (
                  <span className="bg-purple-500 text-white p-2 rounded-full">A A</span>
                )}
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

       
        <div className="border-t p-3 flex items-center bg-white">
          <input
            type="text"
            placeholder="Message AI"
            className="w-full px-4 py-2 mx-2 rounded border focus:outline-none"
          />
          <button className="text-white bg-black p-2 rounded-full">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
