export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("userLoged"));
  if (user && user.accessToken) {
    return { Authorization: user.accessToken};
    
  } else {
    return {};
  }
}
