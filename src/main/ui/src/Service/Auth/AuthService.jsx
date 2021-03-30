import http from "../../Http-common";

const register = (data) => {
  return http.post("/save/2", data);
};

const login = async (data) => {
  return http.post("/login", data).then((response) => {
    let token = response.data.token;
    localStorage.setItem("userLoged", token);
    
  });
};

const logout = () => {
  localStorage.removeItem("userLoged");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("userLoged"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;