import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialState) {
  const [local, setLocal] = useState(() => {
    try {
      const available = window.localStorage.getItem(key);
      return available ? JSON.parse(available) : initialState;
    } catch (e) {
      console.log("Error has been occured while reading localStorage");
      return initialState;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(local));
    } catch (e) {
      console.log("Error Has been Occured", e);
    }
  }, [key, local]);

  return [local, setLocal];
}
