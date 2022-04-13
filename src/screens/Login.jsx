import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Lock, Eye, EyeOff } from "../icons";
import { ASSETS_URL } from "../constants";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <section className="flex items-center justify-center h-full w-full m-auto loginSection">
      <div className="relative h-full w-full hidden bg-blue-400 md:flex md:justify-center md:items-center">
        <img
          src={`${ASSETS_URL}/v1649485162/REcom/logo_oahebo.png`}
          className="h-20 w-20 border-4 border-slate-100 rounded-full absolute -right-10"
          alt="logo"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-full w-full m-auto">
        <div className="w-full max-w-xs">
          <div className="flex flex-col gap-2">
            <div className="relative">
              <input
                className="w-full py-2 px-4 pl-9 rounded-lg bg-white border-slate-200 border focus:border-blue-500"
                type="email"
                placeholder="bablu@gmail.com"
              />
              <User className="absolute top-1/2 transform -translate-y-1/2 left-2 text-xl text-slate-300" />
            </div>
            <div className="relative">
              <input
                className="w-full py-2 px-4 pl-9 rounded-lg bg-white border-slate-200 border focus:border-blue-500"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
              />
              <Lock className="absolute top-1/2 transform -translate-y-1/2 left-2 text-xl text-slate-300" />
              <button
                className="absolute top-1/2 transform -translate-y-1/2 right-4 text-xl text-slate-300 cursor-pointer transition-colors duration-200 hover:text-gray-800"
                onClick={() => setPasswordVisible((prevState) => !prevState)}
              >
                {passwordVisible ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>
          <div className="flex justify-between w-full mt-2">
            <div className="flex gap-1 text-xs">
              <p>Not a user?</p>
              <Link to="/signup" className="underline">
                Sign-up
              </Link>
            </div>
            <button className="text-xs underline">Forgot Password?</button>
          </div>
          <button className="w-full px-6 py-2 bg-blue-400 text-white rounded-full mt-6">
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export { Login };
