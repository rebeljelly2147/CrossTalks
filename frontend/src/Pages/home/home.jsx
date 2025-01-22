import { MessageContainer } from "../../components/messageContainer"
import { Sidebar } from "../../components/sidebar"


export const Home = () => {
  return (
    <div className="flex flex-row bg-gray-900 bg-opacity-70 backdrop-blur-sm  border-gray-800 rounded-lg p-4 w-full h-full">
      <Sidebar />
      <div className="divider lg:divider-horizontal "> <p className="text-2xl text-gray-800">⚕︎</p>  </div>
      <MessageContainer />
    </div>
  )
}

{/* <div className="flex sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 text-2xl text-pink-900 ">

</div> */}

//Starter code for frontend/src/components/sidebar.jsx

// import { MessageContainer } from "../../components/messageContainer"
// import { Sidebar } from "../../components/sidebar"


// export const Home = () => {
//   return (
//     <div className="flex flex-row bg-gray-900 bg-opacity-70 backdrop-blur-sm  border-gray-800 rounded-lg p-4 w-full h-full">
//       <Sidebar />
//       <div className="divider lg:divider-horizontal "> <p className="text-2xl text-gray-800">⚕︎</p>  </div>

//       <MessageContainer />

//     </div>
//   )
// }