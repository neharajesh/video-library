import { Link } from "react-router-dom";
import { CategoriesBar } from ".";
import { videoData } from "../data/videos";
import "../styles.css"

export const HomeScreen = ({sidebar}) => {
    return(<>
        <div className="container-homescreen">
            <CategoriesBar />
            <div className="container-video flex flex-row-wrap">
                {videoData.map((video) => (
                    <div key={video.id}
                    className="video-card card-w-25 h-auto mg-l-1 csr-point txt-s pd-b-05 mg-tb-05 flex-col flex-col-space-evenly">
                        <div className="video-top mg-b-05 card-h-10" >
                            <img className="w-100 h-auto" src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt="Thumbnail" />
                            <span>{video.duration}</span>
                        </div>
                        <div className="txt-700 txt-l mg-l-05 txt-ellipsis">
                            {video.name}
                        </div>
                        <div className="flex flex-items-center mg-tb-025 mg-l-05">
                            <span className="mg-025">👁 {video.views} Views </span>
                            <span className="mg-025">• {video.uploadDate}</span>
                        </div>
                        <div className="flex flex-space-between">
                            <div className="flex flex-items-center mg-tb-025 mg-l-05">
                                <img className="img-xs bdr-rad-round mg-r-1" src={video.channelImage} alt="❤" />
                                <p className="txt-500">{video.channelName}</p>
                            </div>
                            <Link to={`/video/${video.id}`}> <button className="pd-05 mg-05 bdr-thick bdr-yellow bdr-rad-m btn btn-secondary-yellow">Watch Now!</button> </Link>
                        </div>
                    </div>
                ))}
            </div>                
        </div>        
    </>)
}