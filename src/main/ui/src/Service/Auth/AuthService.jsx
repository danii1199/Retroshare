import http from "../../Http-common";

const register = (data) => {
  return http.post("/save/2", data);
};

const login = async (data) => {
  return http.post("/login", JSON.stringify(data)).then((response) => {
    localStorage.setItem("user", JSON.stringify(response.data));
  });
};

const logout = () => {
  localStorage.removeItem("userLoged");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
