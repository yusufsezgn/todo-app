import { useAppContext } from "@/context/Context";
import { Checkbox } from "@mui/material";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const Content = () => {
  const { allTasks, setAllTasks } = useAppContext();
  const [visible, setVisible] = useState(false);

  const handleCheckboxChange = (name) => {
    const updatedTodos = [...allTasks]
    const completedTodo = allTasks.find((todo) => todo.name === name)

    completedTodo.completed = !completedTodo.completed // reverse completed item
    setAllTasks(updatedTodos)
  };

  const handleRemoveTodo = (name) => {
    const updatedTodo = allTasks.filter((todo) => todo.name !== name)
    setAllTasks(updatedTodo)
  };

  return (
    <div className="w-full h-auto px-8 flex flex-col gap-4 py-4 max-h-80 overflow-y-scroll">
      {allTasks?.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-full h-14 rounded-md flex items-center justify-between px-3 bg-[#EEEEEE]`}
          >
            <div className="flex items-center justify-center gap-1">
              <div className="w-auto h-full flex items-center justify-center">
                <Checkbox
                  checked={item?.completed}
                  onChange={() => handleCheckboxChange(item?.name)}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-black opacity-80">
                  Today
                </span>
                <span
                  className={`text-base font-medium text-black ${
                    item?.completed === true ? "line-through" : "no-underline"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            </div>
            <div className={`w-auto h-full flex items-center`}>
              <MdClose
                onClick={() => {
                  handleRemoveTodo(item?.name);
                }}
                className={`w-6 h-6 text-background hover:cursor-pointer hover:scale-90 transition-all`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
