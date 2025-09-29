import { useContext } from "react";
import Recipies from "../component/Recipe";
import { foodContext } from "../context/Context";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { loadingTwo } from "../assets/picture";
import { Link } from "react-router-dom";

export default function Favorites() {
  const { favorites } = useContext(foodContext);

  return (
    <div>
      {favorites && favorites.length > 0 ? (
        <Recipies foods={favorites} />
      ) : (
        <Link to={"/"}>
          <div className="w-full h-fit flex flex-col items-center justify-center">
            <h1 className="text-xl capitalize sm:text-3xl font-bold font-['Inter'] dark:text-white text-black/50">
              You have not save any Recipe Yet
            </h1>
            <img className="w-64" src={loadingTwo} alt="hehe" />
          </div>
        </Link>
      )}
    </div>
  );
}
