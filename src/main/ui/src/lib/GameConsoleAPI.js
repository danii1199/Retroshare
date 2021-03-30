import RetroshareService from "../Service/RetroshareService";
import { useEffect, useState } from "react";
import authHeader from "../Service/Auth/AuthHeader";

const GameConsoleAPI = () => {
  const [gameConsole, setGameConsole] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    
    RetroshareService.getGameConsole().then((response) => {
      const { header } = authHeader();
      const { data } = response;
      setGameConsole(data);
      setGameConsole(header)
    });
  };

  return gameConsole;
};

export default GameConsoleAPI;
