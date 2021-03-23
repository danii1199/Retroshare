import axios from "axios";
import { useEffect, useState } from "react";

const RecordPlayerAPI = () => {
  const [recordPlayer, setRecordPlayer] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    axios.get("http://localhost:8080/retroshare/rp-all").then((response) => {
      const { data } = response;
      setRecordPlayer(data);
    });
  };

  return recordPlayer;
};

export default RecordPlayerAPI;
