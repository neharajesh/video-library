const { createContext, useState, useContext } = require("react");

const WatchLaterContext = createContext();

export const WatchLaterProvider = ({children}) => {
    const [ watchLaterList, setWatchLaterList ] = useState([]);
    return(<>
        <WatchLaterContext.Provider value={{watchLaterList, setWatchLaterList}}>
            {children}
        </WatchLaterContext.Provider>
    </>)
}

export const useWatchLater = () => {
    return useContext(WatchLaterContext)
}