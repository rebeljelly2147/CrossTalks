import { Conversations } from "./Conversations"
import { LogoutButton } from "./LogoutButton"
import { SearchInput } from "./SearchInput"

export const Sidebar = () => {
  return (
    <div className="flex flex-col overflow-auto">
     
      <div><SearchInput /></div>      
      <div className="divider px-3"></div>      
      <Conversations />
      <LogoutButton />

    </div>
  )
}
