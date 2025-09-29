import { useContext } from "react";
import { FoodContext } from "../Context/context";
import { useNavigate } from "react-router-dom";

export default function Search({ focused }) {
  const { search, setSearch, searching } = useContext(FoodContext);

  console.log(search);
  const navigate = useNavigate();

  return (
    <div className="w-full h-fit">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submitted!");
          searching();
          navigate("/");
        }}
      >
        <input
          autoFocus
          className="w-3/4 h-fit pl-2.5 p-1.5 bg-transparent border border-black placeholder:text-[#00000065] dark:border dark:border-white dark:placeholder:text-[#eeeeee7b] placeholder:font-bold rounded-md outline-0 text-white "
          type="text"
          name="searchBox"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
      </form>
    </div>
  );
}
