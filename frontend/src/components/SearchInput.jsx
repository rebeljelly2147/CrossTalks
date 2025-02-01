import { CiSearch } from "react-icons/ci";
export const SearchInput = () => {
  return (
    <form action="" className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full w-full" />
        <button type="submit" className="btn btn-circle btn-md bg-pink-900 hover:bg-pink-800 text-white">
            <CiSearch className="w-4 h-4"/>
        </button>
    </form>
  )
}

// Starter code for frontend/src/components/SearchInput.jsx
// import { CiSearch } from "react-icons/ci";
// export const SearchInput = () => {
//   return (
//     <form action="" className="flex items-center gap-2">
//         <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
//         <button type="submit" className="btn btn-circle btn-md bg-pink-900 hover:bg-pink-800 text-white">
//             <CiSearch className="w-4 h-4"/>
//         </button>
//     </form>
//   )
// }
