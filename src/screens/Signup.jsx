import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ASSETS_URL } from "../constants";
import { SignupStepOne, SignupStepThree, SignupStepTwo } from "../components";
import { useDocumentTitle, useScrollToTop } from "../hooks";
import { validateSignupUserStep1, validateSignupUserStep2 } from "../utilities";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState({
    confirmPassword: "",
  });

  useDocumentTitle("Signup");
  useScrollToTop();

  return (
    <section className="flex flex-col items-center justify-center h-full w-full m-auto loginSection">
      <div className="h-fit w-full bg-blue-400 flex flex-col justify-center items-center">
        <p className="my-2 text-white text-2xl uppercase">Join RECom</p>
        <img
          src={`${ASSETS_URL}/v1649485162/REcom/logo_oahebo.png`}
          className="h-20 w-20 border-4 border-slate-100 rounded-full -mb-10"
          alt="logo"
        />
      </div>
      <div className="flex flex-col items-center h-full w-full max-w-md m-auto mt-20 px-4">
        <article className="w-full">
          {(() => {
            switch (step) {
              case 1:
                return (
                  <SignupStepOne newUser={newUser} setNewUser={setNewUser} />
                );
              case 2:
                return (
                  <SignupStepTwo
                    newUser={newUser}
                    setNewUser={setNewUser}
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                  />
                );
              case 3:
                return (
                  <SignupStepThree newUser={newUser} setNewUser={setNewUser} />
                );
              default:
                return <></>;
            }
          })()}
        </article>
        {step < 3 ? (
          <div className="w-full flex gap-2 justify-between mt-4">
            <div className="flex justify-between w-full mt-2">
              <div className="flex gap-1 text-xs">
                <p className="text-lg">Already a user?</p>
                <Link to="/login" className="underline text-lg">
                  Login
                </Link>
              </div>
            </div>
            {step > 1 ? (
              <button
                className="w-fit px-6 py-2 border border-slate-200 bg-white text-gray-800 rounded-xl transition-colors duration-200  hover:border-blue-400 hover:shadow hover:shadow-slate-300"
                onClick={() => setStep((prevStep) => prevStep - 1)}
              >
                Back
              </button>
            ) : (
              <></>
            )}
            {step < 3 ? (
              <button
                className="w-fit px-6 py-2 border border-slate-200 bg-white text-gray-800 rounded-xl transition-colors duration-200 hover:bg-blue-400 hover:text-white hover:border-blue-400 hover:shadow hover:shadow-blue-300"
                onClick={(event) => {
                  event.preventDefault();
                  const validation =
                    step === 1
                      ? validateSignupUserStep1(newUser)
                      : validateSignupUserStep2(newUser, confirmPassword);
                  if (validation === true) {
                    setStep((prevStep) => prevStep + 1);
                  } else {
                    toast.warning(validation);
                  }
                }}
              >
                Next
              </button>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export { Signup };
