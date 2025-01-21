export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-blur-sm bg-opacity-30">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login 
          <span className="text-pink-900"> ChatLiii</span>
        </h1>

        <form action="">
          <div className="mb-4">
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text"> Username </span>
            </label>
            <input
              type="text"
              id="username"
              className="w-full input input-bordered h-10 px-4 py-2 rounded-md bg-gray-800 text-gray-300"
              placeholder="Enter your username"
            />

            <div>
              <label htmlFor="password" className="label p-2">
                <span className="text-base label-text"> Password</span>
              </label>
              <input 
                type="text"
                className="w-full input input-bordered h-10 px-4 py-2 rounded-md bg-gray-800 text-gray-300"
                placeholder="Enter your password"
              />
            </div>
            <a href="#" className="text-pink-900 text-sm hover:underline hover:text-pink-800 mt-2 inline-block">
              {"Don't "}have an account? Sign Up
              {/* here {"Don't "} is due to the space in between */}
            </a>
          </div>

          <div>
          <button className="btn btn-block btn-sm bg-pink-900 hover:bg-pink-800 text-white sm:btn-sm md:btn-md lg:btn-lg mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}


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
