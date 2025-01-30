import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../utils/emojis";
import { Convertation } from "./Convertation";

export const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("Conversations : ", conversations);

  return (
    <div className="flex flex-col overflow-auto items-start justify-between p-3 py-2">

      {conversations.map((conversation,idx) => (
        <Convertation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length-1}
        />
      ))}

      {loading ? <span className="loading loading-dots loading-lg  text-pink-900 hover:text-pink-500 cursor-pointer"></span> : null}
    </div>
  );
};
