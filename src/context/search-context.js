import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({children}) => {
    const [searchString, setSearchString] = useState("");

    return(<>
        <SearchContext.Provider value={{ searchString, setSearchString }}>
            {children}
        </SearchContext.Provider>
    </>)
}

export const useSearch = () => {
    return useContext(SearchContext);
}