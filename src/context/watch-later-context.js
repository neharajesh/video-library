import { updateUser } from "../api/UserApi";
import { useUser } from "./user-context";

const { createContext, useState, useContext, useEffect } = require("react");

const WatchLaterContext = createContext();

export const WatchLaterProvider = ({children}) => {
    const { user } = useUser();
    const [ watchLaterList, setWatchLaterList ] = useState(user.watchLaterVideos);    

    useEffect(async() => {
        await updateUser(user, {watchLaterVideos: watchLaterList})
    })

    return(<>
        <WatchLaterContext.Provider value={{watchLaterList, setWatchLaterList}}>
            {children}
        </WatchLaterContext.Provider>
    </>)
}

export const useWatchLater = () => {
    return useContext(WatchLaterContext)
}