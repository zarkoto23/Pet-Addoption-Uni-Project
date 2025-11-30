import requester from "../utils/requester";
import { useUserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const baseUsrUrl = "http://localhost:3030/users";

export const useLogin = () => {
  const login = async (email, password) => {
    const result = await requester.post(`${baseUsrUrl}/login`, {
      email,
      password,
    });
    return result;
  };

  return { login };
};

export const useRegister = () => {
  const register = async (email, password) => {
    const result = await requester.post(`${baseUsrUrl}/register`, {
      email,
      password,
    });

    return result;
  };

  return { register };
};

export const useLogout = () => {
  const navigate = useNavigate();

  const { userLogoutHandler, accessToken } = useUserContext();

  const logout = () => {
    if (!accessToken) {
      return;
    }
    requester
      .get(`${baseUsrUrl}/logout`, {
        headers: { "X-Authorization": accessToken },
      })
      .finally(() => userLogoutHandler());

    toast.success("You are Logged out!");
    navigate("/");
  };

  return {
    logout,
  };
};
