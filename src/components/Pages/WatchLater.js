import { Link } from "react-router-dom";
import { useWatchLater } from "../../context/watch-later-context"
import { showNotification } from "../Utilities/toast";
import { removeFromWatchLater } from "../Utilities/watch-later-utilities"

export const WatchLater = () => {
    const { watchLaterList, setWatchLaterList } = useWatchLater();

    const removeWatchLaterHandler = (videoId) => {
        showNotification("Removed from Watch Later")
        const updatedList = removeFromWatchLater(videoId, watchLaterList);
        setWatchLaterList(updatedList)
    }
    return (<>
        <div className="container-video flex flex-row-wrap">
            {watchLaterList.length === 0 && <h1>Add videos to Watch Later!</h1>}
            {watchLaterList.map(watchLaterVideo => <div className="video-card card-w-25 mg-l-1 csr-point txt-s pd-b-05 mg-tb-05 flex-col flex-col-space-evenly">
          <div className="video-top mg-b-05 card-h-10">
            <img
              className="w-100 h-auto"
              src={`https://img.youtube.com/vi/${watchLaterVideo.videoId}/hqdefault.jpg`}
              alt="Thumbnail"
            />
            <span>{watchLaterVideo.duration}</span>
          </div>
          <p className="txt-white">{watchLaterVideo.title}</p>
          <div className="flex flex-space-evenly">
            <Link
              className="link-text txt-black txt-deco-none pd-05 mg-05 bdr-thick bdr-yellow bdr-rad-m btn btn-secondary-yellow w-100"
              to={`/video/${watchLaterVideo.videoId}`}
            >
              Watch Now
            </Link>
            <button
              onClick={() =>
                removeWatchLaterHandler(watchLaterVideo.videoId)
              }
              className="pd-05 mg-05 bdr-thick bdr-yellow bdr-rad-m btn btn-secondary-yellow w-100"
            >
              Remove from Watch Later
            </button>
          </div>
        </div>)}
        <div id="notification-container"></div>
        </div>
    </>)
}