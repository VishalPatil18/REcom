import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ASSETS_URL } from "../constants";
import { signupHandler } from "../utilities";

const SignupStepThree = ({ newUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <h5 className="text-2xl font-bold text-center mb-3">Are you Ready?</h5>
      <div className="flex flex-col gap-4 items-center bg-white border border-slate-200 rounded-xl p-6">
        <img
          src={`${ASSETS_URL}/v1649850755/REcom/mailbox_aj5s4t.svg`}
          className="w-32 h-32"
          alt="mailbox"
        />
        <h6 className="font-bold text-center">
          Confirm creating you're account!
        </h6>
        <button
          className="w-fit px-6 py-2 bg-blue-400 text-white rounded-lg"
          onClick={(event) => signupHandler(event, dispatch, newUser, navigate)}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export { SignupStepThree };
