import axios from "axios";
import { useEffect, useState } from "react";

const VinylAPI = () => {
  const [vinyl, setVinyl] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    axios.get("http://localhost:8080/retroshare/v-all").then((response) => {
      const { data } = response;
      setVinyl(data);
    });
  };
  return vinyl;
};
export default VinylAPI;
