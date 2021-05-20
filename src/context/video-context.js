import axios from "axios";
import { ROOT_URL } from "../config";

const { createContext, useState, useContext, useEffect } = require("react");

const VideoContext = createContext();

export const VideoProvider = ({children}) => {
    const [videoList, setVideoList] = useState([]);

    const getVideos = async () => {
        try {
            const response = await axios.get(`${ROOT_URL}/videos`);
            setVideoList(response.data.videos);
        } catch (err) {
            console.log("Error retriving videos from axios", err.message)
        }
    }

    useEffect(() => {
        getVideos();
    }, [setVideoList])

    return(<>
        <VideoContext.Provider value={{videoList}}>
            {children}
        </VideoContext.Provider>
    </>)
}

export const useVideo = () => {
    return useContext(VideoContext);
}