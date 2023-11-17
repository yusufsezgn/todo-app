import { useAppContext } from "@/context/Context";
import { Alert } from "@mui/material";
import { useState } from "react";

const Footer = () => {
  const [data, setData] = useState("");
  const [alert, setAlert] = useState(false);

  const { allTasks, setAllTasks } = useAppContext();

  const onKeyFunc = (e) => {
    if (e.key === "Enter") {
      if (data.length < 3) {
        setAlert(true);
      } else if (data.length > 120) {
        setAlert(true)
      } else {
        setAllTasks([
          ...allTasks,
          {
            name: data,
            completed: false,
          },
        ]);
      }
    }
  };

  return (
    <div className="w-full h-20 flex items-center justify-between md:px-8 absolute bottom-0 px-3">
      {alert === true && (
        <Alert className="fixed animate-pulse top-0 right-0 cursor-pointer" severity="error" onClick={() => {
          setAlert(false)          
        }}>
          Please describe your task between 3-120 characters. — check it out!
        </Alert>
      )}
      <div className="w-4/5 h-full flex items-center justify-start relative">
        <input
          type="text"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
          onKeyDown={onKeyFunc}
          className="md:w-3/5 w-full focus:w-full h-12 bg-white border-2 border-background px-4 font-medium rounded hover:border-custom outline-none focus:border-custom transition-all  placeholder:text-background placeholder:opacity-75 placeholder:font-medium"
          placeholder="Do wonders"
        />
      </div>
      <div className="w-1/5 h-full flex items-center justify-end">
        <div className="">
          <a
            className="text-sm md:inline hidden font-medium text-background underline hover:no-underline transition-all cursor-pointer hover:text-custom"
            href=""
          >
            Source code?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
