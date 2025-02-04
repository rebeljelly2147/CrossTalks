import { IoLogOutOutline } from "react-icons/io5";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <IoLogOutOutline
          className="w-7 h-7 text-pink-900 hover:text-pink-700 cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-dots loading-sm  text-pink-900 cursor-pointer"></span>
      )}
    </div>
  );
};
export default LogoutButton;
