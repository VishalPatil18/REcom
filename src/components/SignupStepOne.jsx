const SignupStepOne = ({ newUser, setNewUser }) => {
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
              value={newUser.firstName}
              onChange={(e) =>
                setNewUser((newUser) => ({
                  ...newUser,
                  firstName: e.target.value,
                }))
              }
              required
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
              value={newUser.lastName}
              onChange={(e) =>
                setNewUser((newUser) => ({
                  ...newUser,
                  lastName: e.target.value,
                }))
              }
              required
            />
          </div>
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
            <label className="w-full px-2 bg-slate-50 text-slate-400 text-xs uppercase">
              Username
            </label>
            <input
              className="w-full p-2 bg-slate-50"
              type="text"
              placeholder="bablutailor"
              value={newUser.username}
              onChange={(e) =>
                setNewUser((newUser) => ({
                  ...newUser,
                  username: e.target.value,
                }))
              }
              required
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { SignupStepOne };
