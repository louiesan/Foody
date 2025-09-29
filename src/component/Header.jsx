import { NavLink } from "react-router-dom";
import Searcher from "./Seacher";
import { House, Star, ScrollText, Search, CircleX } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      {/* PC NAVBAR */}
      <header className="hidden w-full h-fit md:flex p-5 justify-around">
        <h1 className="text-2xl font-bold text-[#c1ffff] hover:text-indigo-500 duration-300 ease-in-out">
          <NavLink to="/">Foody</NavLink>
        </h1>
        <Searcher />
        <ul className="w-fit h-full flex justify-around items-center gap-5 m-auto">
          <li
            className={`text-xl text-emerald-700 dark:text-white font-bold font-sans transition duration-500 ease-in-out cursor-pointer hover:scale-90 hover:translate-1`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "dark:text-indigo-400 text-neutral-800"
                  : "dark:text-white dark:hover:text-indigo-400 text-lime-200 hover:text-neutral-800 transition duration-300 ease-in-out"
              }
            >
              Home
            </NavLink>
          </li>
          <li
            className={`text-xl text-emerald-700 dark:text-white font-bold font-sans transition duration-500 ease-in-out cursor-pointer hover:scale-90 hover:translate-1`}
          >
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "dark:text-indigo-400 text-neutral-800"
                  : "dark:text-white dark:hover:text-indigo-400 text-lime-200 hover:text-neutral-800 transition duration-300 ease-in-out"
              }
            >
              About
            </NavLink>
          </li>
          <li
            className={`text-xl text-emerald-700 dark:text-white font-bold font-sans transition duration-500 ease-in-out cursor-pointer hover:scale-90 hover:translate-1`}
          >
            <NavLink
              to="/Favorites"
              className={({ isActive }) =>
                isActive
                  ? "dark:text-indigo-400 text-neutral-800"
                  : "dark:text-white dark:hover:text-indigo-400 text-lime-200 hover:text-neutral-800 transition duration-300 ease-in-out"
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </header>
      {/* Mobile NAVBAR */}
      <div className="w-full h-fit flex flex-row justify-between items-center">
        <h1 className="block md:hidden text-2xl text-white font-bold font-sans hover:text-indigo-400 transition duration-500 ease-in-out p-2.5 text-left w-full">
          <NavLink to="/">Foody</NavLink>
        </h1>
        {showSearch ? <Searcher /> : null}
      </div>
      <header className="z-20 min-w-2xs w-[95%] flex md:hidden fixed bottom-2.5 left-2.5 items-center p-2.5 gap-2.5 justify-around bg-white/30 backdrop-blur-lg border-t border-white/20 rounded-xl ">
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-indigo-400" : "bg-transparent"
            }
            to="/"
          >
            <House width={"35px"} height={"35px"} />
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-indigo-400" : "bg-transparent"
            }
            to="/Favorites"
          >
            <Star width={"35px"} height={"35px"} />
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-indigo-400" : "bg-transparent"
            }
            to="/About"
          >
            <ScrollText width={"35px"} height={"35px"} />
          </NavLink>
        </div>
        <div>
          <NavLink>
            {showSearch ? (
              <CircleX
                onClick={() => setShowSearch((prev) => !prev)}
                width={"35px"}
                height={"35px"}
              />
            ) : (
              <Search
                onClick={() => setShowSearch((prev) => !prev)}
                width={"35px"}
                height={"35px"}
              />
            )}
          </NavLink>
        </div>
      </header>
    </>
  );
}
