import { useState } from "react";
import LeftChat from "./LeftChat";
import RightChat from "./RightChat";
import apiClient from "../services/api_client";

interface Prop {
  name: String;
}

function Chat({ name }: Prop) {
  const [dataArr, setDataArr] = useState<String[]>([
    "Kohomada kama",
    "Athi wishishtai Sir",
  ]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const sendBtnHander = () => {
    setLoading(true);
    const origianlArr = [...dataArr];
    setDataArr([...dataArr, question]);
    apiClient
      .post("/chat", {
        msg: question,
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjQxNTA5MTYxY2VhOTc3OTM4YzQ5NyIsInJvbGUiOiJkb2N0b3IiLCJpYXQiOjE3MTM2NDE4MDAsImV4cCI6MTcxMzY0NTQwMH0.AApKWjbjiyphqGYP_iM2EVk4YmkyblJDU1x9hKD_65Q",
        },
      })
      .then((res) => {
        setDataArr([...dataArr, res.data.answer]);
        setLoading(false);
      })
      .catch((err) => {
        setDataArr([...origianlArr]);
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div className="mx-80 mt-16 flex flex-col h-[85vh]">
      <div className="flex justify-center">
        <span className="text-2xl font-medium">HealthWatch360.AI</span>
      </div>
      <div className="flex-1 overflow-y-auto over scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 ">
        {dataArr.map((data, index) => (
          <div key={index} className="mb-4 px-8">
            {index % 2 == 1 && <LeftChat name={name} msg={data} />}
            {index % 2 == 0 && (
              <RightChat name="HealthWatch360.AI" msg={data} />
            )}
          </div>
        ))}
        {loading && (
          <div className="flex flex-col items-end">
            <RightChat name="HealthWatch360.AI" msg="Loading" />
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
