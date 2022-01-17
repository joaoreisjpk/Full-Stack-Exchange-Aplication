import { createContext, useContext } from "react";
import { io, Socket } from 'socket.io-client';

interface IContext {
  socket: Socket
}

interface TradesProviderProps {
  children: JSX.Element;
}

export const TradesContext = createContext({} as IContext);

export function TradesProvider({children}: TradesProviderProps): JSX.Element {
  const socket: Socket = io('http://localhost:3333/');

/*   useEffect(() => {
    const getStorage = localStorage.getItem('trades') || '[]'
    setTrades(JSON.parse(getStorage));
  }, []);

  useEffect(() => {
    localStorage.setItem('trades', JSON.stringify(trades))
  }, [trades]); */

  return (
    <TradesContext.Provider value={{ socket }}>
      {children}
    </TradesContext.Provider>
  )
}

export function useTrades(): IContext {
  const context = useContext(TradesContext);
  return context
}
