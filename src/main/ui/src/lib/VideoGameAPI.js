import { useEffect, useState } from "react";


const VideoGameAPI = () => {
    const [game, setGame] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("http://localhost:8080/retroshare/g-all");
    const games = await data.json();
    setGame(games);
  };
    return game;
}

export default VideoGameAPI;