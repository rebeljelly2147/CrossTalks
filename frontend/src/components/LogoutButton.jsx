import { IoLogOutOutline } from "react-icons/io5";
import useLogout from "../../Hooks/useLogout";
export const LogoutButton = () => {

  const { loading,logout } = useLogout();

  return (
    <div className="mt-auto ">
      {!loading ? (
        <IoLogOutOutline
          className="w-7 h-7 text-pink-900 hover:text-pink-500 cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-dots loading-lg  text-pink-900 hover:text-pink-500 cursor-pointer"></span>
      )}
      {/* <IoLogOutOutline
        className="w-7 h-7 text-pink-900 hover:text-pink-500 cursor-pointer"
        onClick={logout}
      /> */}
    </div>
  );
}
