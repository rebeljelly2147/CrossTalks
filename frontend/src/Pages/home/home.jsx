import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-950 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-55'>
			
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
