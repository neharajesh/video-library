import { Link } from "react-router-dom";
import { useVideo } from "../../context/video-context"

export const TopVideos = () => {
    const { videoList } = useVideo();
    return(<>
        <div className="container-video flex flex-row-wrap">
            {videoList.filter(video => video.views > 1500000).map(video => <div key={video._id} className="video-card card-w-25 mg-l-1 csr-point txt-s pd-b-05 mg-tb-05 flex-col flex-col-space-evenly">
            <div className="video-top mg-b-05 card-h-10">
                <img
                className="w-100 h-auto"
                src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                alt="Thumbnail"
                />
                <span>{video.duration}</span>
            </div>
            <p className="txt-white">{video.title}</p>
            <div className="flex flex-space-evenly">
                <Link
                className="link-text txt-black txt-deco-none pd-05 mg-05 bdr-thick bdr-yellow bdr-rad-m btn btn-secondary-yellow w-100"
                to={`/video/${video.videoId}`}
                >
                Watch Now
                </Link>
            </div>
            </div>)}
        </div>
    </>)
}