import { GenderCheckBox } from "./GenderCheckBox";

export const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-blur-sm bg-opacity-30">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          <span>SignUp to </span>
          <span className="text-pink-900"> ChatLiii</span>
        </h1>

        <form action="" className="mt-4">
          <div className="mb-4">
            <label htmlFor="fullname" className="label p-2">
              <span className="text-base label-text"> Fullname </span>
            </label>
            <input
              type="text"
              id="fullname"
              className="w-full input input-bordered h-10 px-4 py-2 rounded-md bg-gray-800 text-gray-300"
              placeholder="Enter your fullname"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text"> Username </span>
            </label>
            <input
              type="text"
              id="username"
              className="w-full input input-bordered h-10 px-4 py-2 rounded-md bg-gray-800 text-gray-300"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text"> Password </span>
            </label>
            <input
              type="password"
              id="password"
              className="w-full input input-bordered h-10 px-4 py-2 rounded-md bg-gray-800 text-gray-300"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirm password" className="label p-2">
              <span className="text-base label-text"> Confirm Password </span>
            </label>
            <input
              type="password"
              id="confirm password"
              className="w-full input input-bordered h-10 px-4 py-2 rounded-md bg-gray-800 text-gray-300"
              placeholder="Confirm your password"
            />
          </div>

          <br />

          {/* Gender checkbox will be added later */}
          <div>
            <GenderCheckBox />
          </div>

          <br />

          <a href="#" className="text-pink-900 text-sm hover:underline hover:text-pink-800 mt-2 inline-block">
              {"Already "}have an account? Login
              {/* here {"Don't "} is due to the space in between */}
          </a>

          <br /><br />

          <div>
            <button type="submit" className="w-full bg-pink-900 text-white py-2 rounded-md hover:bg-pink-800">
              SignUp
            </button>
          </div>

        </form>
      </div>
    </div >
  );
};
