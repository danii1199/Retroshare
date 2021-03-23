import { useEffect, useState } from "react";
import axios from "axios";

const UserAPI = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    axios.get("http://localhost:8080/retroshare/all").then((response) => {
      const { data } = response;
      setUser(data);
    });
  };

  return user;
};
export default UserAPI;
