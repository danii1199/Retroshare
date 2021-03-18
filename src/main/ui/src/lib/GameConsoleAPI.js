import {useEffect, useState}  from "react";

const GameConsoleAPI = () => {
    const [gameConsole, setGameConsole] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("http://localhost:8080/retroshare/gc-all");
    const gameConsoles = await data.json();
    setGameConsole(gameConsoles);
  };

  return gameConsole;
}

export default GameConsoleAPI;