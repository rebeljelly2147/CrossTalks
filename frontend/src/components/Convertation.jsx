import useConversation from "../zustand/useConversation";

export const Convertation = ({ conversation, emoji, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center overflow-auto w-full hover:bg-pink-950 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-pink-900" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
        >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user_avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between ">
            <p className="text-lg font-light text-gray-200 ">
              {conversation.fullname}
            </p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

//Starter code for frontend/src/components/messageContainer.jsx
// export const Convertation = () => {
//   return (
//     <>
//     <div className="flex gap-2 items-center hover:bg-gray-700 rounded p-2 py-1 cursor-pointer">

//       <div className="avatar online">
//         <div className="w-12 rounded-full">
//           <img src="/userIcon.jpeg" alt="user_avatar" />
//         </div>
//       </div>

//       <div className="flex flex-col flex-1">
//         <div className="flex justify-between gap-3">
//           <p className="text-lg font-sans text-gray-200 ">Username</p>
//           <span className="text-xs text-gray-500"> ❤️‍🔥Last message</span>
//         </div>
//       </div>

//     </div>

//     <div className="divider my-0 py-0 h-1" />
//     </>
//   )
// }
