import { createContext, useContext, useEffect, useState } from "react";
import { updateUser } from "../api/UserApi";
import { useUser } from "./user-context";

const VideoHistoryContext = createContext();

export const VideoHistoryProvider = ({children}) => {
    const { user } = useUser();
    const [videoHistoryList, setVideoHistoryList] = useState(user.watchedVideos);

    useEffect(async() => {
        await updateUser(user, {watchedVideos: videoHistoryList})
    })
    return(<>
        <VideoHistoryContext.Provider value={{videoHistoryList, setVideoHistoryList}}>
            {children}
        </VideoHistoryContext.Provider>
    </>)
}

export const useVideoHistory = () => {
    return useContext(VideoHistoryContext)
}