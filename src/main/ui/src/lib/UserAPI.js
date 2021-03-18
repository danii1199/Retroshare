import { useEffect, useState } from "react";

const UserAPI = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("http://localhost:8080/retroshare/all");
    const users = await data.json();
    setUser(users);
  };

  return user;
};

export default UserAPI;
