import { useAuthContext } from "../context/AuthContext";
import { extractTime } from "../utils/extractTime";
import useConversation from "../zustand/useConversation";
export const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.sender === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic; // this ? is called optional chaining which is used to avoid error when the object is null or undefined
  const bubbleColor = fromMe ? "bg-pink-900" : "bg-gray-800";
  const formattedTime = extractTime(message.createdAt);
  // const formattedTime = new Date(message.createdAt).toLocaleTimeString();

  return (
    <>
    {/* <div className="chat chat-start">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt="Reciever avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>

        <div className="chat-header">
            Bhai
            <time className="text-xs opacity-50"> 12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
    </div> */}
    
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Reciever avatar"
            src={profilePic} />
        </div>
      </div>
      <div className="chat-header">
        {fromMe ? "You" : selectedConversation?.name}
        <time className="text-xs opacity-50"> 12:46</time>
      </div>
      <div className={`chat-bubble text-white ${bubbleColor} pb-2`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
    </>
  )
}
