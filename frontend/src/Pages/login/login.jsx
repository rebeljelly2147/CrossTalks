import { Link } from "react-router-dom";
import { useLogin } from "../../../Hooks/useLogin";
import { useState } from "react";

export const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading } = useLogin();

  const handleSubmit = async (e) => {

    e.preventDefault();
    //prevents the default behavior of the form which is to reload the page
    
    await login({ username, password });
    // console.log(inputs); else login Id and password will be displayed in the console LOL 😉
  };
  
  return (
    <div className="flex flex-col  items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-blur-sm bg-opacity-30">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-pink-900"> कलरव </span>
        </h1>

        <form
          onSubmit={handleSubmit}
        >
          <div className="mb-4">

            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text"> Username </span>
            </label>

            <input
              type="text"
              id="username"
              className="w-full input input-bordered h-10 px-4 py-2 rounded-md bg-gray-800 text-gray-300"
              placeholder="Enter your username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              required
              autoComplete="off"
            />

            <div>

              <label htmlFor="password" className="label p-2">
                <span className="text-base label-text"> Password</span>
              </label>

              <input
                type="password"
                className="w-full input input-bordered h-10 px-4 py-2 rounded-md bg-gray-800 text-gray-300"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required 
                autoComplete="off"
              />

            </div>

            <Link
              to="/signup"
              className="text-pink-900 text-sm hover:underline hover:text-pink-800 mt-2 inline-block"
            >
              {"Don't "}have an account? Sign Up
              {/* here {"Don't "} is due to the space in between */}
            </Link>
          </div>

          <div>
            <button
              className="btn btn-block btn-md bg-pink-900 hover:bg-pink-800 text-white sm:btn-sm md:btn-md lg:btn-lg mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-dots loading-lg text-pink-900 hover:text-pink-500 cursor-pointer"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Starter Code for all the File
// export const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-blur-sm bg-opacity-30">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-pink-900"> ChatLiii</span>
//         </h1>

//         <form action="">
//           <div className="mb-4">
//             <label htmlFor="password" className="label p-2">
//               <span className="text-base label-text"> Username </span>
//             </label>
//             <input
//               type="text"
//               id="username"
//               className="w-full input input-bordered h-10 px-4 py-2 rounded-md bg-gray-800 text-gray-300"
//               placeholder="Enter your username"
//             />

//             <div>
//               <label htmlFor="password" className="label p-2">
//                 <span className="text-base label-text"> Password</span>
//               </label>
//               <input
//                 type="text"
//                 className="w-full input input-bordered h-10 px-4 py-2 rounded-md bg-gray-800 text-gray-300"
//                 placeholder="Enter your password"
//               />
//             </div>
//             <a href="#" className="text-pink-900 text-sm hover:underline hover:text-pink-800 mt-2 inline-block">
//               {"Don't "}have an account? Sign Up
//               {/* here {"Don't "} is due to the space in between */}
//             </a>
//           </div>

//           <div>
//           <button className="btn btn-block btn-sm bg-pink-900 hover:bg-pink-800 text-white sm:btn-sm md:btn-md lg:btn-lg mt-2">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }
