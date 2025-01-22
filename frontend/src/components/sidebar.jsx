import { Conversations } from "./Conversations"
import { SearchInput } from "./SearchInput"

export const Sidebar = () => {
  return (
    <div>
        <SearchInput />
        <div className="divider px-3">
            <Conversations />
            {/* <LogoutButton /> */}
        </div>
    </div>
  )
}
