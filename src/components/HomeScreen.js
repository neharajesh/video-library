import { Link } from "react-router-dom";
import { CategoriesBar } from ".";
import { useVideo } from "../context/video-context";
import "../styles.css"
import { dateFormatter } from "./Utilities/date-utility";

export const HomeScreen = ({sidebar}) => {
    const {videoList} = useVideo();

    return(<>
        <div className="container-homescreen">
            <CategoriesBar />
            <div className="container-video flex flex-row-wrap">
                {videoList.map((video) => (
                    <div key={video._id}
                    className="video-card card-w-25 h-auto mg-l-1 csr-point txt-s pd-b-05 mg-tb-05 flex-col flex-col-space-evenly">
                        <div className="video-top mg-b-05 card-h-10" >
                            <img className="w-100 h-auto" src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`} alt="Thumbnail" />
                            <span>{video.duration}</span>
                        </div>
                        <div className="txt-700 txt-l mg-l-05 txt-ellipsis">
                            {video.title}
                        </div>
                        <div className="flex flex-items-center mg-tb-025 mg-l-05">
                            <span className="mg-025">👁 {video.views} views </span>
                            <span className="mg-025">↗ {dateFormatter(video.uploadDate)}</span>
                        </div>
                        <div className="flex flex-space-between">
                            <Link to={`/video/${video.videoId}`}> <button className="pd-05 mg-05 bdr-thick bdr-yellow bdr-rad-m btn btn-secondary-yellow">Watch Now!</button> </Link>
                        </div>
                    </div>
                ))}
            </div>                
        </div>        
    </>)
}