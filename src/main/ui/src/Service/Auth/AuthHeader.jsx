export default function AuthHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    return user.token;
  }
}
