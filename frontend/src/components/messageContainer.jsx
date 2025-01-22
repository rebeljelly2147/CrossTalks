import { MessageInput } from "./MessageInput"
import { Messages } from "./Messages"
export const MessageContainer = () => {
  const noChatSelected = false;
  // const noChatSelected = true;
  return (
    <div className="flex flex-col md:min-w-[450px] w-full">
       {noChatSelected ? <NoChatSelected /> : (
        <>
        {/* Header */}
        <div className="flex flex-row justify-start items-center  px-4 py-2 bg-gray-800 bg-opacity-50 rounded-t-lg mb-2 space-x-2">
         <span className="label-text text-sm items-center "> To :</span>
         <span className="text-gray-200 font-sans items-center text-xl "> Bhaiii ♡ </span>
        </div>
        <Messages />
        <MessageInput />
        </>
       )}
    </div>
  )
}

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col gap-2 items-center justify-center h-full sm:text-lg md:text-2xl text-gray-200 font-sans text-2xl">
        <p className="flex items-center text-3xl w-full justify-center">Welome 👋 Abhiii ✨</p>
        <p className="text-xl ">Select a chat to start a conversation </p>
      </div>
    </div>
  )
}

// Starter code for frontend/src/components/messageContainer.jsx
// import { MessageInput } from "./MessageInput"
// import { Messages } from "./Messages"

// export const MessageContainer = () => {
//   return (
//     <div className="flex flex-col md:min-[450px]: w-full">
//        <>
//        {/* Header */}
//        <div className="px-4 py-2 bg-gray-800 bg-opacity-50 rounded-t-lg mb-2 w-full">
//         <span className="label-text"> To:</span>
//         <span className="text-gray-200 font-sans text-2xl "> Bhai </span>
//        </div>

//        <Messages />
//        <MessageInput />
//        </>
//     </div>
//   )
// }
