export const Message = () => {
  return (
    <>
    {/* <div className="chat chat-start">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt="Reciever avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>

        <div className="chat-header">
            Bhai
            <time className="text-xs opacity-50"> 12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
    </div> */}
    
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Sender avatar"
            src="./userIcon.jpeg" />
        </div>
      </div>
      <div className="chat-header">
        Abhiii
        <time className="text-xs opacity-50"> 12:46</time>
      </div>
      <div className="chat-bubble">I Love you ♡ </div>
      <div className="chat-footer opacity-50">Seen at 12:46</div>
    </div>
    </>
  )
}
