import { Conversations } from "./Conversations"
import { LogoutButton } from "./LogoutButton"
import { SearchInput } from "./SearchInput"

export const Sidebar = () => {
  return (
    <div className="flex flex-col overflow-auto w-1/3">
     
      <div><SearchInput /></div>      
      <div className="divider px-3"></div>      
      <Conversations />
      <LogoutButton />

    </div>
  )
}


//Starter code for frontend/src/components/sidebar.jsx
// import { Conversations } from "./Conversations"
// import { LogoutButton } from "./LogoutButton"
// import { SearchInput } from "./SearchInput"

// export const Sidebar = () => {
//   return (
//     <div className="flex flex-col overflow-auto w-1/3">
     
//       <div><SearchInput /></div>      
//       <div className="divider px-3"></div>      
//       <Conversations />
//       <LogoutButton />

//     </div>
//   )
// }
