import { Link } from "react-router-dom";
import { GenderCheckBox } from "./GenderCheckBox";
import { useState } from "react";
import { useSignup } from "../../../Hooks/useSignup";

export const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { signup, loading } = useSignup();

  const handleCheckboxChange = (gender) => {
    // 'gender' is the value of the checkbox that is clicked not 'e' which is the event object
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents the default behavior of the form which is to reload the page
    await signup(inputs);
    console.log(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-blur-sm bg-opacity-30">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          <span>SignUp to </span>
          <span className="text-pink-900"> कलरव </span>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-4"
        >
          <div className="mb-4">
            <label htmlFor="fullname" className="label p-2">
              <span className="text-base label-text"> Fullname </span>
            </label>
            <input
              type="text"
              id="fullname"
              className="w-full input input-bordered h-10 px-4 py-2 rounded-md bg-gray-800 text-gray-300"
              placeholder="Enter your fullname"
              value={inputs.fullname} //value is used to set the value of the input field to the value of the fullname field of the state
              onChange={(e) =>
                setInputs({ ...inputs, fullname: e.target.value })
              } //onChange is used to update the state of the input field whenever the value of the input field changes (e) is the event object and e.target.value is the value of the input field syntax is setInput({...input, fullname: e.target.value}) here ...input is used to copy the previous state and fullname: e.target.value is used to update the fullname field of the state with the value of the input field
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
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
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
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <br />

          <div>
            <GenderCheckBox
              onCheckboxChange={handleCheckboxChange}
              selectedGender={inputs.gender}
            />
          </div>

          <br />

          <Link
            to="/login"
            className="text-pink-900 text-sm hover:underline hover:text-pink-800 mt-2 inline-block"
          >
            {"Already "}have an account? Login
            {/* here {"Don't "} is due to the space in between */}
          </Link>

          <br />
          <br />

          <div>
            <button
              type="submit"
              className="w-full bg-pink-900 text-white py-2 rounded-md hover:bg-pink-800"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-dots loading-lg  text-pink-900 hover:text-pink-500 cursor-pointer"></span>
              ) : (
                "SignUp"
              )}
              {/* if loading is true then the button will display "Loading..." else it will display "SignUp" */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
