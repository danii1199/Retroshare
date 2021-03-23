import axios from "axios";
import { useEffect, useState } from "react";

const GameConsoleAPI = () => {
  const [gameConsole, setGameConsole] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    axios.get("http://localhost:8080/retroshare/gc-all").then((response) => {
      const { data } = response;
      setGameConsole(data);
    });
  };

  return gameConsole;
};

export default GameConsoleAPI;
