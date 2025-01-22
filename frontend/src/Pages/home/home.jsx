import { MessageContainer } from "../../components/messageContainer"
import { Sidebar } from "../../components/sidebar"


export const Home = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

{/* <div className="flex sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 text-2xl text-pink-900 ">

</div> */}