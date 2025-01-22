import { IoSend } from "react-icons/io5";
export const MessageInput = () => {
  return (
    <form action="" className="px-4 my-3">
      <div className="w-full">
        <input type="text" className="bordered text-xl rounded-full block w-full p-2.5 bg-gray-700 w-full text-white backdrop-blur-sm opacity-50" placeholder="Type a message..." />
        
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center rounded-full bg-pink-900 hover:bg-pink-800 text-white ">
          <IoSend />
        </button>
      </div>
    </form>
  )
}


// Starter code for frontend/src/components/messageContainer.jsx

// import { IoSend } from "react-icons/io5";
// export const MessageInput = () => {
//   return (
//     <form action="" className="px-4 my-3">
//       <div className="w-full">
//         <input type="text" className="bordered text-xl rounded-full block w-full p-2.5 bg-gray-700 w-full text-white backdrop-blur-sm opacity-50" placeholder="Type a message..." />
        
//         <button type="submit" className="absolute inset-y-0 end-0 flex items-center rounded-full bg-pink-900 hover:bg-pink-800 text-white ">
//           <IoSend />
//         </button>
//       </div>
//     </form>
//   )
// }
