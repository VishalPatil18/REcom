import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home } from "./screens";
import "./App.css";

const App = () => {
  return (
    <div className="App scroll-smooth text-gray-800">
      <Navbar />
      <main className="bg-slate-100 h-full min-h-screen py-16 px-3">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export { App };
