import axios from "axios";
import { useEffect, useState } from "react";

const VideoGameAPI = () => {
  const [game, setGame] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    axios.get("http://localhost:8080/retroshare/g-all").then((response) => {
      const { data } = response;
      setGame(data);
    });
  };
  return game;
};

export default VideoGameAPI;
