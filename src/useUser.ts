import axios from "axios";

export interface LoginResponseInterface {
  auth_token: string;
}

export const useUser = () => {
  const login = async (email: string, password: string) => {
    return axios

      .post<LoginResponseInterface>(
        "http://127.0.0.1:8000/api/auth/token/login/",
        {
          email: email,
          password: password,
        }
      )
      .then((data) => {
        return data.data;
      });
  };

  return { login };
};
