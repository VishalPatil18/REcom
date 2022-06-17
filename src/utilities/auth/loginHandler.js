import { toast } from "react-toastify";
import { login } from "../../redux/asyncThunks";

const loginHandler = async (event, dispatch, user, navigate) => {
  event.preventDefault();

  const { payload } = await dispatch(login(user));

  if (payload.status === 200) {
    localStorage.setItem("user", JSON.stringify(payload.data.foundUser));
    localStorage.setItem("token", payload.data.encodedToken);
    navigate("/home");
    toast.success("Login Successful!");
  } else {
    toast.error(payload.data.error[0]);
  }
};

export { loginHandler };
