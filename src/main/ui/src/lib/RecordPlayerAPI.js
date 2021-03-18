import { useEffect, useState } from "react";

const RecordPlayerAPI = () => {
  const [recordPlayer, setRecordPlayer] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("http://localhost:8080/retroshare/v-all");
    const recordPlayers = await data.json();
    setRecordPlayer(recordPlayers);
  };

  return recordPlayer;
};

export default RecordPlayerAPI;
