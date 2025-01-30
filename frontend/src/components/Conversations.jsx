import useGetConversations from "../../Hooks/useGetConversations"
import { Convertation } from "./Convertation"

export const Conversations = () => {

  const { loading, conversations } = useGetConversations();
  console.log("Conversations : ", conversations);

  return (
    <div className="flex flex-col overflow-auto items-center justify-between p-3 py-2">
      <Convertation />
      <Convertation />
      <Convertation />
    </div>
  )
}
