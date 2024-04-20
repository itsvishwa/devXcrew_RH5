import { useEffect, useState } from "react";

interface Prop {
  msg: String;
}

function CustomError({ msg }: Prop) {
  const [visibility, setVisibility] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibility(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {visibility && (
        <div className="toast toast-start toast-top">
          <div className="alert alert-error">
            <span>{msg}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomError;
