import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./components";
import { Error404, Home, Login, Profile, Signup } from "./screens";
import { RequiresAuth } from "./RequiresAuth";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const { pathname } = useLocation();
  const publicRouter = ["/login", "/signup"];

  return (
    <div className="App box-border font-light scroll-smooth text-gray-800">
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {publicRouter.includes(pathname) ? <></> : <Navbar />}
      <main
        className={`bg-slate-100 h-full min-h-screen ${
          publicRouter.includes(pathname) ? "" : "py-16 px-3"
        }`}
      >
        <Routes>
          <Route
            path="/home"
            element={
              <RequiresAuth>
                <Home />
              </RequiresAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile/user"
            element={
              <RequiresAuth>
                <Profile />
              </RequiresAuth>
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </div>
  );
};

export { App };
