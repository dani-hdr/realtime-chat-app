"use client";
import Image from "next/image";
import React, {  useRef, useState,useEffect } from "react";

const ChatPage = () => {
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const messagesRef = useRef<HTMLDivElement>(null);

  const sendMessageHandler = () => {
    if (currentMessage !== null || currentMessage !== "") {
    
      setMessages([...messages, currentMessage]);
      setCurrentMessage("");
    }
  };

  useEffect(()=>{
    messagesRef.current?.scrollIntoView({behavior:'smooth'})
  },[messages])

  return (
    <div className="flex h-screen w-full flex-col justify-between">
      <div className=" border-b-2 p-5">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-lg"
            src="/logo.png"
            width={40}
            height={40}
            alt="avatar"
          />
          <div className="flex flex-col gap-0">
            <h3 className="font-bold">Daniel heydari</h3>
            <span className="text-xs font-medium text-green-500">online</span>
          </div>
        </div>
      </div>
      {/* Messages */}
      <div className="messages h-full overflow-y-auto p-5">
        <div className="flex flex-col gap-2 ">
          {messages.map((msg, index) => (
            <div
              key={index}
              className=" max-w-sm self-end break-words rounded-xl bg-blue-500 p-3 text-white"
            >
              {msg}
            </div>
          ))}
          <div ref={messagesRef}/>
        </div>
      </div>
      <div className="border-t-2 p-5">
        <textarea
          value={currentMessage}
          
          onChange={(e) => setCurrentMessage(e.target.value)}
          className="w-full  rounded-lg border-none bg-slate-100 text-sm placeholder-slate-400"
          placeholder="Write something.."
        />
        <button
          disabled={currentMessage === ""}
          onClick={sendMessageHandler}
          
          className="w-full rounded-lg bg-blue-500 px-1 py-2 text-white shadow-md transition-colors hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
