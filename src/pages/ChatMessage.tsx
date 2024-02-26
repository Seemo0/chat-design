export const ChatMessage = ({ message }: { message: any }) => {
  const isSentByUser = message.sendBy === "semo";

  return (
    <div
      className={`flex w-[100%] ${
        isSentByUser ? "justify-end" : "justify-start"
      } mb-2 `}
    >
      <div className={`bg-gray-300 rounded-lg p-2 `}>{message.text}</div>
    </div>
  );
};
