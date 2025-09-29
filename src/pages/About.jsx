import { fav1, fav2, fav3 } from "../assets/picture";

export default function About() {
  return (
    <div className="w-full min-h-screen px-4 py-8 bg-[radial-gradient(circle_at_bottom_right,_violet,_orange)] dark:bg-[radial-gradient(circle_at_top_right,_#1e293b,_#0f172a)] transition-colors duration-500 text-black dark:text-white">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-5 mt-5">
        <h1 className="text-xl sm:text-3xl font-bold font-aleo border-b-2 border-white dark:border-gray-300 self-start">
          What is FoodyME :
        </h1>
        <p className="text-base text-left sm:text-lg font-overpass text-gray-900/90 dark:text-gray-300 p-2.5">
          Whether you're a beginner in the kitchen or a seasoned home chef, our
          site offers easy-to-follow, tested recipes from around the world —
          including local favorites. We focus on quality, simplicity, and
          flavor. With quick filters, mobile-friendly access, and the ability to
          save your favorite dishes, we make sure cooking feels as enjoyable as
          eating.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col gap-5 mt-10 text-left">
        <h1 className="text-xl sm:text-3xl font-bold font-aleo border-b-2 border-white dark:border-gray-300 self-start">
          What You need to know:
        </h1>
        <p className="text-lg font-overpass text-gray-800 dark:text-gray-400">
          Welcome to our recipe haven! Here's what makes your experience here
          deliciously smooth:
        </p>
        <ul className="flex flex-col gap-4 text-start max-w-2xl">
          <li className="flex items-start gap-2">
            <img className="w-6 sm:w-7 md:w-8" src={fav1} alt="cook" />
            <div>
              <span className="block font-extrabold text-sm sm:text-base md:text-xl text-white dark:text-gray-200">
                Tried & Tested Recipes:
              </span>
              <span className="text-sm sm:text-base text-gray-900 dark:text-gray-400">
                Every dish is cooked, tasted, and perfected — no random
                copy-paste stuff here!
              </span>
            </div>
          </li>

          <li className="flex items-start gap-2">
            <img className="w-6 sm:w-7 md:w-8" src={fav2} alt="earth" />
            <div>
              <span className="block font-extrabold text-sm sm:text-base md:text-xl text-white dark:text-gray-200">
                Culturally Rich Dishes:
              </span>
              <span className="text-sm sm:text-base text-gray-900 dark:text-gray-400">
                From Algerian classics to global favorites — discover something
                new every time.
              </span>
            </div>
          </li>

          <li className="flex items-start gap-2">
            <img className="w-6 sm:w-7 md:w-8" src={fav3} alt="save" />
            <div>
              <span className="block font-extrabold text-sm sm:text-base md:text-xl text-white dark:text-gray-200">
                Save Your Favorites:
              </span>
              <span className="text-sm sm:text-base text-gray-900 dark:text-gray-400">
                Create your own collection of loved recipes — one tap, saved
                forever.
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div className="w-full max-w-4xl mx-auto mt-10 mb-10 text-left">
        <h1 className="text-xl sm:text-3xl border-b-2 border-white dark:border-gray-300 font-bold font-aleo w-fit">
          We aim to :
        </h1>
        <p className="text-base sm:text-lg font-overpass text-gray-900/90 dark:text-gray-300 p-2.5">
          Make cooking easier, more enjoyable, and accessible to everyone by
          sharing authentic, delicious recipes you can trust. No fluff, just
          real food made simple. Whether you're a beginner or a passionate food
          lover, there's always something for you here. If you want to join us,
          Contact Us and do not hesitate:
        </p>
        <div className="w-full h-fit text-center mt-5">
          <a
            className="relative w-fit px-5 py-2.5 rounded-lg border-white border-3 z-[1] bg-gray-900/80 font-bold hover:bg-transparent after:bg-linear-[120deg,#A6B1E1,#CACFD6,#CACFD6,#424874] after:content-[''] after:absolute after:inset-0 after:rounded-lg after:z-[-1] after:transition-all after:duration-500 after:-top-0.5 after:-left-0.5 after:w-[calc(100%+4px)] after:h-[calc(100%+4px)] after:animate-glows after:bg-size-[600%] font-overpass duration-500 ease-in-out transition-all text-center text-white"
            href="tel:+55-595-005-312"
          >
            {" "}
            Get in Touch{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
