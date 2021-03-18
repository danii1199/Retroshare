import { useEffect, useState } from "react";


const VinylAPI = () => {
    const [vinyl, setVinyl] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("http://localhost:8080/retroshare/v-all");
    const vinyls = await data.json();
    setVinyl(vinyls);
  };
    

    return vinyl;
}

export default VinylAPI;