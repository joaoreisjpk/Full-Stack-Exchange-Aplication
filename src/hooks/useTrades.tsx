import { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from 'socket.io-client';

interface IContext {
  trades: string[];
  setTrades: (param: string[]) => void;
  socket: Socket
}

export const TradesContext = createContext({} as IContext);

export function TradesProvider({children}) {
  const [trades, setTrades] = useState([] as string[]);
  const socket: Socket = io('http://localhost:4000/');

  useEffect(() => {
    const getStorage = localStorage.getItem('trades') || '[]'
    setTrades(JSON.parse(getStorage));
  }, []);

  useEffect(() => {
    localStorage.setItem('trades', JSON.stringify(trades))
  }, [trades]);

  return (
    <TradesContext.Provider value={{ trades, setTrades, socket }}>
      {children}
    </TradesContext.Provider>
  )
}

export function useTrades() {
  const context = useContext(TradesContext);
  return context
}
