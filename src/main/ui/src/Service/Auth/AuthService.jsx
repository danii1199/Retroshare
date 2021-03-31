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
  localStorage.removeItem("user")
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const getRoles = () => {
  const role = JSON.parse(localStorage.getItem("user"))
  

  if(role && role.authorities[0] === "ROLE_ADMIN") {
    return "Admin";
  }
  if(role && role.authorities[0] === "ROLE_USER") {
    return "User";
  }
  else{}
}

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  getRoles
};

export default AuthService;
