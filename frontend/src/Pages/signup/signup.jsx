import { Link } from "react-router-dom";
import { GenderCheckBox } from "./GenderCheckBox";
import { useState } from "react";

export const SignUp = () => {

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(input);
  }

  const handleGenderChange = (e) => {
    setInput({...input, gender: e.target.value});
  }

  const [input, setInput] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-blur-sm bg-opacity-30">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          <span>SignUp to </span>
          <span className="text-pink-900"> कलरव </span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="fullname" className="label p-2">
              <span className="text-base label-text"> Fullname </span>
            </label>
            <input
              type="text"
              id="fullname"
              className="w-full input input-bordered h-10 px-4 py-2 rounded-md bg-gray-800 text-gray-300"
              placeholder="Enter your fullname"
              value = {input.fullname}
              onChange = {(e) => setInput({...input, fullname: e.target.value})} //onChange is used to update the state of the input field whenever the value of the input field changes (e) is the event object and e.target.value is the value of the input field syntax is setInput({...input, fullname: e.target.value}) here ...input is used to copy the previous state and fullname: e.target.value is used to update the fullname field of the state with the value of the input field 
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
              value = {input.username}
              onChange = {(e) => setInput({...input, username: e.target.value})}
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
              value = {input.password}
              onChange = {(e) => setInput({...input, password: e.target.value})}
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
              value = {input.confirmPassword}
              onChange = {(e) => setInput({...input, confirmPassword: e.target.value})}
            />
          </div>

          <br />

          {/* Gender checkbox will be added later */}
          <div>
            <GenderCheckBox onCheckboxChange={handleGenderChange} selectedGender={input.gender} />
          </div>

          <br />

          <Link to="/login" className="text-pink-900 text-sm hover:underline hover:text-pink-800 mt-2 inline-block">
              {"Already "}have an account? Login
              {/* here {"Don't "} is due to the space in between */}
          </Link>

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
