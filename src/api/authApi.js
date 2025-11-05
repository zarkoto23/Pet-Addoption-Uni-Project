import requester from "../utils/requester";

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
