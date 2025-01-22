import { MessageInput } from "./MessageInput"
import { Messages } from "./Messages"

export const MessageContainer = () => {
  return (
    <div className="flex flex-col md:min-[450px]: w-full">
       <>
       {/* Header */}
       <div className="px-4 py-2 bg-gray-800 bg-opacity-50 rounded-t-lg mb-2 w-full">
        <span className="label-text"> To:</span>
        <span className="text-gray-200 font-sans text-2xl "> Bhai </span>
       </div>

       <Messages />
       <MessageInput />
       </>
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
