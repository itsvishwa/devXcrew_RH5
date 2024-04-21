interface Props {
  name: String;
  msg: String;
}

function LeftChat({ name, msg }: Props) {
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-12">
              <span className="text-2xl">{name[0].toUpperCase()}</span>
            </div>
          </div>
        </div>
        <div className="chat-header">{name}</div>
        <div className="chat-bubble">{msg}</div>
      </div>
    </>
  );
}

export default LeftChat;
