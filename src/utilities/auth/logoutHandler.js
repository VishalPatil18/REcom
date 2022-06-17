import { toast } from "react-toastify";
import { logout } from "../../redux/slices";

const logoutHandler = async (dispatch) => {
  dispatch(logout());
  toast.success("Logout Successful!");
};

export { logoutHandler };
