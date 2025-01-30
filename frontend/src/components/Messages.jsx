import { Message } from "./Message.JSX"

export const Messages = () => {
  return (
    <div className="px-4 flex-1 overflow-auto flex flex-col gap-2">
      <Message />
      <Message />
      <Message />
    </div>
  )
}
