import { createContext, useContext, useEffect, useState } from "react";

interface IContext {
  trades: string[];
  setTrades: (param: string[]) => void;
}

export const TradesContext = createContext({} as IContext);

export function TradesProvider({children}) {
  const [trades, setTrades] = useState([] as string[]);

  useEffect(() => {
    const getStorage = localStorage.getItem('trades') || '[]'
    setTrades(JSON.parse(getStorage));
  }, [])

  useEffect(() => {
    localStorage.setItem('trades', JSON.stringify(trades))
  }, [trades])

  return (
    <TradesContext.Provider value={{ trades, setTrades }}>
      {children}
    </TradesContext.Provider>
  )
}

export function useTrades() {
  const context = useContext(TradesContext);
  return context
}
