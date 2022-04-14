import { useState } from "react";
import { Eye, EyeOff } from "../icons";

const SignupStepTwo = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
      <h5 className="text-2xl font-bold text-center mb-3">
        Secure your account
      </h5>
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <div className="flex flex-col gap-4">
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 relative">
            <label className="w-full px-2 bg-slate-50 text-slate-400 text-xs uppercase">
              Password
            </label>
            <input
              className="w-full p-2 bg-slate-50"
              type={passwordVisible ? "text" : "password"}
              placeholder="••••••••"
            />
            <button
              className="absolute top-1/2 transform -translate-y-1/2 right-4 text-xl text-slate-300 cursor-pointer transition-colors duration-200 hover:text-gray-800"
              onClick={() => setPasswordVisible((prevState) => !prevState)}
            >
              {passwordVisible ? <EyeOff /> : <Eye />}
            </button>
          </div>
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
            <label className="w-full px-2 bg-slate-50 text-slate-400 text-xs uppercase">
              Confirm Password
            </label>
            <input
              className="w-full p-2 bg-slate-50"
              type="password"
              placeholder="••••••••"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { SignupStepTwo };
