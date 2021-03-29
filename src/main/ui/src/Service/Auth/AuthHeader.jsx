export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("userLoged"));
  const authorities = JSON.parse(localStorage.getItem("Authorization"))

  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}
