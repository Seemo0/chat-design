import { useState } from "react";
import { ChatMessage } from "./ChatMessage";

const data = [
  {
    sendBy: "semo",
    text: "testing the chat message",
  },
  {
    sendBy: "admin",
    text: "testing the chat message",
  },
  {
    sendBy: "semo",
    text: "testing the chat message",
  },
  {
    sendBy: "admin",
    text: "testing the chat message",
  },
];

export const Chat = () => {
  const [messages, setMessages] = useState(data);
  return (
    <div className="flex flex-col w-[600px] h-[400px] space-y-2 ">
      <div className="flex flex-col w-[600px] h-[500px]  border border-black ">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <div className="flex w-full items-center justify-between space-x-2">
        <input
          className="h-10 w-full border border-black rounded-lg"
          type="text"
        />
        <button className="bg-violet-400 w-14 h-10 rounded-xl">Send</button>
      </div>
    </div>
  );
};
