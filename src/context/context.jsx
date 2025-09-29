import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export const foodContext = createContext(null);

export default function GlobalState({ children }) {
  const [search, setSearch] = useState("");
  const [isLoading, SetIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [foods, setFoods] = useState(null);
  const [ready, setReady] = useState(false);
  const [favorites, setFavorites] = useLocalStorage("favorite", []);

  function addToFavorites(item) {
    if (favorites.find((items) => items.recipe_id === item.recipe_id)) {
      const id = item.recipe_id;
      const newArray = favorites.filter((e) => e.recipe_id !== id); // Don't Forget to type this in ur note!
      console.log("exist");
      console.log(newArray);
      setFavorites(newArray);
    } else {
      console.log("doesn't Exist");
      setFavorites((prev) => {
        console.log(prev);
        return [...prev, item];
      });
    }
  }
  console.log(favorites);

  async function searching() {
    if (search.length > 1) {
      try {
        SetIsLoading(true);
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/search?q=${search}`
        );
        const data = await res.json();
        if (data) {
          setFoods(data.recipes);
          setReady(true);
        } else {
          setReady(false);
        }
        console.log(foods);
      } catch (e) {
        setError(`Sorry an Error:${e} Occured`);
        console.log(e, "error Occured!");
      } finally {
        SetIsLoading(false);
      }
    } else {
      setReady(false);
    }
  }
  console.log(foods);

  return (
    <foodContext.Provider
      value={{
        isLoading,
        search,
        setSearch,
        searching,
        ready,
        error,
        foods,
        favorites,
        setFavorites,
        addToFavorites,
      }}
    >
      {children}
    </foodContext.Provider>
  );
}

{
  /*https://forkify-api.herokuapp.com/api/search?q=pizza */
}
