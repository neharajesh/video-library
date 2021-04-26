import ReactPlayer from "react-player";
import { useParams } from "react-router"
import { videoData } from "../data/videos"

export const VideoPlayer = () => {
    const { videoId } = useParams();
    const video = videoData.find(item => item.id === videoId);
    return (<>
        <div className="flex-col w-100 h-auto mg-l-2">
            <div className="w-100 flex mg-tb-1">
                <img className="img-xs mg-t-1 mg-l-1 bdr-rad-round mg-r-1" src={video.channelImage} alt="❤" />
                <div className="flex-col mg-l-1">
                    <div className="txt-xl mg-tb-1">{video.name}</div>
                    <p>Release Date: <span className="txt-700">{video.uploadDate}</span></p>
                    <p>Duration: <span className="txt-700">{video.duration}</span></p>
                </div> 
            </div>   
            <div className="h-100 w-100 flex-self-center">
            <ReactPlayer width="90%" height="90%" url={`https://www.youtube.com/watch?v=${video.id}`}/></div>    
        </div>
    </>)
}