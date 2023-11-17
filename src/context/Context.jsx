import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function Wrapper({ children }) {
  let tasks = [];

  const [allTasks, setAllTasks] = useState(tasks)

  const sharedState = {
    allTasks, setAllTasks
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
