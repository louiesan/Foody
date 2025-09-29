import { useContext } from "react";
import { FoodContext } from "../Context/Context";
import Recipies from "../component/Recipe";
import {
  firstDish,
  secondDish,
  thirdDish,
  loadingOne,
  bgweb,
} from "../assets/picture";
import { Star } from "lucide-react";

export default function Home() {
  const { ready, foods, isLoading } = useContext(FoodContext);

  const homeItems = [
    {
      img: firstDish,
      name: "Chicken Plat",
      indgredient: ["Chicken", "Rice", "Tomato"],
      reviews: "5",
    },
    {
      img: secondDish,
      name: "Rice Plat",
      indgredient: ["Chicken", "Rice", "Tomato"],
      reviews: "4",
    },
    {
      img: thirdDish,
      name: "Makaron Plat",
      indgredient: ["Chicken", "Rice", "Tomato"],
      reviews: "4",
    },
  ];

  return (
    <>
      {ready ? (
        <Recipies foods={foods} />
      ) : isLoading ? (
        <div className="w-full h-fit flex flex-col justify-center items-center gap-2.5">
          <h1 className="text-2xl text-white font-bold ">
            We are cooking Data for you, Please Wait
          </h1>
          <img className="w-40" src={loadingOne} alt="Loading" />
        </div>
      ) : (
        <>
          <div className="w-full h-fit flex flex-col-reverse md:justify-evenly md:items-center md:gap-5 md:flex-row justify-center items-center gap-2.5">
            <div className="w-full md:w-96 flex flex-col justify-center items-center md:items-start gap-4 md:p-0 p-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-white md:text-left text-center leading-tight">
                Quick and Tasty Recipes
              </h1>

              <p className="text-base sm:text-lg text-center md:text-left font-medium text-[#414141] dark:text-[#d3d3d3]/80 max-w-md">
                Discover{" "}
                <span className="text-amber-400 font-semibold">hundreds</span>{" "}
                of delicious recipes from around the world, perfect for{" "}
                <span className="text-yellow-400 italic">every</span> skill
                level and occasion.
              </p>

              <h4
                className="
              before:absolute before:w-0 hover:before:w-full before:h-full before:bg-amber-600/40 dark:before:bg-purple-900/40 before:left-0 before:top-0 before:rounded-md before:transition-all before:duration-700 before:ease-in-out before:z-[-1]
              hover:-translate-y-2.5 hover:scale-105 transition-all ease-in-out duration-500 font-bold dark:text-white text-[#0f0022] px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-md text-center select-none cursor-pointer"
              >
                All Recipes For Free
              </h4>
            </div>

            <div className={`min-w-2xs w-fit h-fit sm:min-w-[300px] `}>
              <img
                className="min-w-2xs w-3xs sm:w-2xs content-center lg:w-sm p-2.5 h-fit "
                src={bgweb}
                alt="plat"
              />
            </div>
          </div>
          <div className="w-full h-fit flex flex-col md:flex-row md:flex-wrap gap-2.5 md:justify-around items-center p-2.5 ">
            {homeItems && homeItems.length
              ? homeItems.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="before:absolute before:w-0 hover:before:w-full before:h-full cursor-pointer before:bg-amber-600/40 dark:before:bg-purple-900/40 before:left-0 before:top-0 before:rounded-md before:transition-all before:duration-700 before:ease-in-out before:z-[-1]
              hover:-translate-y-2.5 hover:scale-105 transition-all ease-in-out duration-500 min-w-2xs w-full md:w-xs flex flex-nowrap justify-center items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-2.5 rounded-xl rounded-bl-none"
                    >
                      <img className="w-24" src={item.img} alt={item.name} />
                      <div className="w-full text-xl text-black dark:text-white text-left">
                        <h4 className="text-xl font-bold font-sans">
                          {item.name}
                        </h4>
                        <h4 className="text-lg text-black dark:text-indigo-300">
                          {item.indgredient.join("~")}
                        </h4>
                        <h5 className="w-fit flex flex-row gap-0.5 font-bold items-center font-[system-ui] text-base content-center">
                          Reviews:
                          <Star size={18} strokeWidth="0" fill="yellow" />
                          {item.reviews}
                        </h5>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </>
      )}
    </>
  );
}
