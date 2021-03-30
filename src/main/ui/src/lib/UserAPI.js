import { useEffect, useState } from "react";
import RetroshareService from "../Service/RetroshareService";
import authHeader from "../Service/Auth/AuthHeader";



const UserAPI = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    RetroshareService.getAll().then((response) => {
      const { header } = authHeader();
      const { data } = response;
      setUser(data);
      setUser(header);

    });
  };

  return user;
};
export default UserAPI;
