import { ASSETS_URL } from "../constants";

const SignupStepThree = () => {
  return (
    <>
      <h5 className="text-2xl font-bold text-center mb-3">
        You're all set. Ready?
      </h5>
      <div className="flex flex-col gap-4 items-center bg-white border border-slate-200 rounded-xl p-6">
        <img
          src={`${ASSETS_URL}/v1649850755/REcom/mailbox_aj5s4t.svg`}
          className="w-32 h-32"
          alt="mailbox"
        />
        <h6 className="font-bold text-center">
          Congratz, you successfully created your account.
        </h6>
        <button className="w-fit px-6 py-2 bg-blue-400 text-white rounded-lg">
          Let Me In
        </button>
      </div>
    </>
  );
};

export { SignupStepThree };
