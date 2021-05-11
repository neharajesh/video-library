const { createContext, useState } = require("react");

const VideoContext = createContext();

export const VideoProvider = ({children}) => {
    const [videoList, setVideoList] = useState([]);

    //setVideoList function => get data using axios

    return(<>
        <VideoContext.Provider value={{videoList}}>
            {children}
        </VideoContext.Provider>
    </>)
}