import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Header from "./component/Header";
import GlobalState from "./context/context";
import Details from "./pages/recipeno/Details";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalState>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Favorites" element={<Favorites />}></Route>
          <Route path="/recipeno/:id" element={<Details />}></Route>
        </Routes>
        <ToastContainer />
      </GlobalState>
    </>
  );
}

export default App;
