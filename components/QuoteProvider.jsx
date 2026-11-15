"use client";
import { createContext, useContext, useState } from "react";
const QuoteContext = createContext(null);
export function QuoteProvider({ children }) {
  const [selected, setSelected] = useState("standart");
  const [period, setPeriod] = useState("intro");
  function choosePackage(key) {
    setSelected(key);
    setPeriod("intro");
    document.getElementById("teklif")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  return (
    <QuoteContext.Provider
      value={{ selected, setSelected, period, setPeriod, choosePackage }}
    >
      {children}
    </QuoteContext.Provider>
  );
}
export const useQuote = () => useContext(QuoteContext);
