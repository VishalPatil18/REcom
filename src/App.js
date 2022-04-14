import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Login, Profile, Signup } from "./screens";
import "./App.css";

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className="App box-border font-light scroll-smooth text-gray-800">
      {pathname !== "/login" && pathname !== "/signup" ? <Navbar /> : <></>}
      <main
        className={`bg-slate-100 h-full min-h-screen ${
          pathname !== "/login" && pathname !== "/signup" ? "py-16 px-3" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export { App };
