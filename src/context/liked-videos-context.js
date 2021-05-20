import { createContext, useContext, useState } from "react";

const LikedVideosContext = createContext();

export const LikedVideosProvider = ({children}) => {
    const [likedVideosList, setLikedVideosList] = useState([]);
    return(<>
        <LikedVideosContext.Provider value={{likedVideosList, setLikedVideosList}}>
            {children}
        </LikedVideosContext.Provider>
    </>)
}

export const useLikedVideos = () => {
    console.log("useLikedVideos is called")
    return useContext(LikedVideosContext);
}