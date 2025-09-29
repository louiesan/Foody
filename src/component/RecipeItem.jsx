import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FoodContext } from "../Context/context";
import { remove, save } from "../assets/picture";
import { ArrowBigLeft } from "lucide-react";
import { toast } from "react-toastify";

export default function Items({ item }) {
  const { addToFavorites, favorites } = useContext(FoodContext);

  const notify = () => {
    condition
      ? toast.info(`${item.title} has been Removed`)
      : toast.success(`${item.title} has been Saved!`);
  };

  const condition =
    favorites.findIndex((items) => items.recipe_id === item.recipe_id) !== -1;
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 p-3 m-3 md:m-0 md:bg-transparent md:border-0 md:rounded-none md:shadow-none bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            className="w-full max-w-xs h-64 object-cover rounded-xl"
            src={item.image_url}
            alt="recipeImg"
          />
        </div>

        <div className="flex flex-col justify-start items-start gap-5 w-full md:w-2/3 px-2">
          <h1 className="text-white text-2xl sm:text-3xl font-bold font-[system-ui]">
            {item.title}
          </h1>

          <div className="w-full text-left">
            <h3 className="text-black dark:text-white font-bold text-lg sm:text-xl">
              Instruction:
            </h3>
            <p className="text-sm sm:text-base text-black/90 dark:text-white/40">
              {item.ingredients.join(", ")}
            </p>
          </div>

          <div className="w-full text-left">
            <h4 className="text-black dark:text-white font-bold">Publisher:</h4>
            <h6 className="text-sm sm:text-base font-light text-gray-600">
              @{item.publisher.toLowerCase().split(" ").join("_")}
            </h6>
          </div>

          <div className="w-full flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                addToFavorites(item);
                notify();
              }}
              className="flex flex-row items-center justify-center gap-2.5 w-full sm:w-1/2 bg-indigo-300 text-white font-bold rounded-md cursor-pointer p-2.5"
            >
              <img
                className="w-5"
                src={condition ? remove : save}
                alt="handleFaveGif"
              />
              {condition ? "Remove From Favorites" : "Add to favorites"}
            </button>

            <button
              onClick={() => navigate(-1)}
              className="flex flex-row justify-center items-center gap-2.5 w-full sm:w-1/2 bg-red-300 text-white font-bold rounded-md cursor-pointer p-2.5"
            >
              <ArrowBigLeft />
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
