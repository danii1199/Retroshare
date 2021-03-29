import { useState, useEffect } from "react";
import AuthService from "../../Service/Auth/AuthService";

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser());
  }, []);

  return currentUser;
};

export default UserProfile;

