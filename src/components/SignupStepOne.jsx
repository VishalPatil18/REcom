import { User, Lock, Eye } from "../icons";

const SignupStepOne = () => {
  return (
    <>
      <h5 className="text-2xl font-bold text-center mb-3">
        Tell us more about you
      </h5>
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <div className="flex flex-col gap-4">
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
            <label className="w-full px-2 bg-slate-50 text-slate-400 text-xs uppercase">
              First Name
            </label>
            <input
              className="w-full p-2 bg-slate-50"
              type="text"
              placeholder="Bablu"
            />
          </div>
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
            <label className="w-full px-2 bg-slate-50 text-slate-400 text-xs uppercase">
              Last Name
            </label>
            <input
              className="w-full p-2 bg-slate-50"
              type="text"
              placeholder="Tailor"
            />
          </div>
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
            <label className="w-full px-2 bg-slate-50 text-slate-400 text-xs uppercase">
              Email
            </label>
            <input
              className="w-full p-2 bg-slate-50"
              type="email"
              placeholder="bablu@gmail.com"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { SignupStepOne };
