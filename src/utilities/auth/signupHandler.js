import { toast } from "react-toastify";
import { signup } from "../../redux/asyncThunks";

const signupHandler = async (event, dispatch, newUser, navigate) => {
  event.preventDefault();

  const { payload } = await dispatch(signup(newUser));

  if (payload.status === 201) {
    localStorage.setItem("user", JSON.stringify(payload.data.createdUser));
    localStorage.setItem("token", payload.data.encodedToken);
    navigate("/home");
    toast.success("Signup Successful!");
  } else {
    toast.error(payload.data.error[0]);
  }
};

export { signupHandler };
