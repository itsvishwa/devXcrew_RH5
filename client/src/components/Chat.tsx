import { useState } from "react";
import LeftChat from "./LeftChat";
import RightChat from "./RightChat";
import axios from "axios";

interface Prop {
  name: String;
}

function Chat({ name }: Prop) {
  const [dataArr, setDataArr] = useState<String[]>([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const sendBtnHander = () => {
    setLoading(true);
    const origianlArr = [...dataArr];
    setDataArr([...dataArr, question]);
    axios
      .post(
        "http://localhost:3000/chat/200124502620",
        {
          message: question,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setDataArr([...dataArr, res.data.reply]);
        setLoading(false);
      })
      .catch((err) => {
        // setDataArr([...origianlArr]);
        console.error(err);
      });
  };

  return (
    <div className="mx-80 mt-16 flex flex-col h-[85vh]">
      <div className="flex justify-center">
        <span className="text-2xl font-medium">Chat with MediMind.AI</span>
      </div>
      <div className="flex-1 overflow-y-auto over scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 ">
        {dataArr.map((data, index) => (
          <div key={index} className="mb-4 px-8">
            {index % 2 == 0 && <LeftChat name={name} msg={data} />}
            {index % 2 == 1 && <RightChat name="MediMind.AI" msg={data} />}
          </div>
        ))}
        {loading && (
          <div className="flex flex-col items-end">
            <RightChat name="MediMind.AI" msg="Loading" />
            <span className="loading loading-bars loading-sm mr-10"></span>
          </div>
        )}
      </div>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          value={question}
          onChange={(event) => {
            setQuestion(event.target.value);
          }}
          className="grow"
          placeholder="Message HealthWatch360..."
        />
        <button
          onClick={() => {
            sendBtnHander();
          }}
          className="btn btn-sm btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </button>
      </label>
    </div>
  );
}

export default Chat;
