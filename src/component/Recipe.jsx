import { useContext } from "react";
import { foodContext } from "../context/context";
import { Link } from "react-router-dom";
import { loadingTwo } from "../assets/picture";

export default function Recipies({ foods }) {
  const { error } = useContext(foodContext);
  const { search } = useContext(foodContext);
  const yours = search;
  console.log(foods);

  const Recipies =
    foods && foods.length > 0
      ? foods.map((e) => {
          return (
            <div
              className="min-w-3xs w-3xs  max-h-64 h-fit p-2.5 flex flex-col justify-center gap-2.5 items-center bg-violet-950/10 backdrop-blur-xs border border-bg-violet-950/10 rounded-md shadow-lg"
              key={e.recipe_id}
            >
              <div className="w-fit h-fit rounded-xl overflow-hidden">
                <img
                  className="w-40 h-40 transition duration-300 ease-in-out hover:scale-110"
                  src={e.image_url}
                  alt="recipeImg"
                />
              </div>
              <div className=" w-full h-fit flex flex-col gap-2.5">
                <h2 className="text-white font-bold text-sm ">{e.title}</h2>
                <Link to={`/recipeno/${e.recipe_id}`}>
                  <button className="bg-orange-950/60 text-orange-400 border-orange-400 dark:bg-violet-950/60 cursor-pointer dark:text-violet-400 border dark:border-violet-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-orange-400 shadow-orange-400 dark:bg-violet-400 dark:shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    More Details
                  </button>
                </Link>
              </div>
            </div>
          );
        })
      : null;
  return (
    <div className="flex flex-wrap justify-around items-center gap-2.5">
      {error ? (
        "Error Occured!"
      ) : Recipies ? (
        Recipies
      ) : (
        <div className="w-full h-fit flex flex-col items-center justify-center">
          <h1 className="text-xl capitalize sm:text-3xl font-bold font-['Inter'] dark:text-white text-black/50">
            Couldn't Find {yours}
          </h1>
          <img className="w-64" src={loadingTwo} alt="hehe" />
        </div>
      )}
    </div>
  );
}
