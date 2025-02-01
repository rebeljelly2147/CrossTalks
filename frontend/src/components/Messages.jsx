import useGetMessages from "../../hooks/useGetMessages"
import { Message } from "./Message";
// import { Message } from "./Message.jsx";
import MessageSkeleton from "./MessageSkeleton";

export const Messages = () => {
  const { messages, loading } = useGetMessages();
  console.log("Messages : ", messages);
  // console.log("Is messages an array?", Array.isArray(messages));
  return (
    <>
      <div className="px-4 flex-1 overflow-scroll flex flex-col justify-end gap-2">
        {!loading &&
          messages.length > 0 &&
          messages.map((message) => (
            <Message key={message._id} message={message} />          
          ))
        }
        
        
        {loading &&
          [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />
        )}
        
        {!loading && messages.length === 0 && (
          <p className="text-center text-gray-400 ">No messages yet</p>
        )}
      </div>
    </>
  );
};
