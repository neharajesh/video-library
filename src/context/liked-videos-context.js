import { createContext, useContext, useEffect, useState } from "react";
import { updateUser } from "../api/UserApi";
import { useUser } from "./user-context";

const LikedVideosContext = createContext();

export const LikedVideosProvider = ({children}) => {
    const { user } = useUser();
    const [likedVideosList, setLikedVideosList] = useState(user.likedVideos);    

    useEffect(async() => {
        await updateUser(user, {likedVideos: likedVideosList})
    }, [])

    return(<>
        <LikedVideosContext.Provider value={{likedVideosList, setLikedVideosList}}>
            {children}
        </LikedVideosContext.Provider>
    </>)
}

export const useLikedVideos = () => {
    return useContext(LikedVideosContext);
}