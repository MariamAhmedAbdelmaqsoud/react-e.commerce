import { useState } from "react";
import { SearchContext } from "./SearchContext";
export default function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}
