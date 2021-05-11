import { createContext, useContext, useState } from "react";

const VideoHistoryContext = createContext();

export const VideoHistoryProvider = ({children}) => {
    const [videoHistoryList, setVideoHistoryList] = useState([]);
    return(<>
        <VideoHistoryContext.Provider value={{videoHistoryList, setVideoHistoryList}}>
            {children}
        </VideoHistoryContext.Provider>
    </>)
}

export const useVideoHistory = () => {
    return useContext(VideoHistoryContext)
}