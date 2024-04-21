interface Props {
  name: String;
  msg: String;
}

function RightChat({ name, msg }: Props) {
  return (
    <>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header">{name}</div>
        <div className="chat-bubble">{msg}</div>
      </div>
    </>
  );
}

export default RightChat;
