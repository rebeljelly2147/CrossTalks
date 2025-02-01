import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../utils/emojis";
import { Convertation } from "./Convertation";

export const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("Conversations : ", conversations);

  return (
    <div className="py-2 flex flex-col overflow-auto">

      {conversations.map((conversation,idx) => (
        <Convertation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length-1}
        />
      ))}

      {loading ? <span className="loading loading-dots loading-lg  text-pink-900 mx-auto"></span> : null}

    </div>
  );
};
