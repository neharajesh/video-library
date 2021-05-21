import { Link } from "react-router-dom";
import { useVideoHistory } from "../../context/video-history-context"
import { removeFromHistory } from "../Utilities/history-utilities";
import { showNotification } from "../Utilities/toast";

export const History = () => {
    const {videoHistoryList, setVideoHistoryList} = useVideoHistory();

    const removeHistoryHandler = (videoId, historyList) => {
        showNotification("Removing from History")
        const updatedHistory = removeFromHistory(videoId, historyList)
        setVideoHistoryList(updatedHistory)
    }

    return(<div className="container-video flex flex-row-wrap">
        {videoHistoryList.length === 0 && <h1>Watch videos!</h1>}
        {videoHistoryList.map(video => (
            <div className="video-card card-w-25 mg-l-1 csr-point txt-s pd-b-05 mg-tb-05 flex-col flex-col-space-evenly">
                <div className="video-top mg-b-05 card-h-10" >
                    <img className="w-100 h-auto" src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`} alt="Thumbnail" />
                    <span>{video.duration}</span>
                </div>
                {video.title}
                <div className="flex flex-space-evenly">
                    <Link className="link-text txt-black txt-deco-none pd-05 mg-05 bdr-thick bdr-yellow bdr-rad-m btn btn-secondary-yellow w-100" to={`/video/${video.videoId}`}>Watch Again</Link>
                    <button onClick={() => removeHistoryHandler(video.videoId, videoHistoryList)} className="pd-05 mg-05 bdr-thick bdr-yellow bdr-rad-m btn btn-secondary-yellow w-100">Remove From History</button>
                </div>
                
            </div>
        ))}
        <div id="notification-container"></div>
    </div>)
}