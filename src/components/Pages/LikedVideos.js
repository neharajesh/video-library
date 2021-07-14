import { Link } from "react-router-dom";
import { useLikedVideos } from "../../context/liked-videos-context";
import { removeFromLikedVideos } from "../Utilities/liked-video-utilities";
import "../../styles.css";
import { showNotification } from "../Utilities/toast";
import { useUser } from "../../context/user-context";

export const LikedVideos = () => {
  const { likedVideosList, setLikedVideosList } = useLikedVideos();
  const { user } = useUser();

  const removeLikeHandler = (videoId, likedVideosList) => {
    const updatedList = removeFromLikedVideos(videoId, likedVideosList);
    showNotification("Like Removed");
    setLikedVideosList(updatedList);
  };

  return (
    <>
      <div className="container-video flex flex-row-wrap">
        <div className="mg-1 mg-l-2">
            <h1 class="txt-white"> {likedVideosList.length === 0 && "Add videos!"} </h1>
            <p> {user.username === "" && "Login to save data"}</p>
        </div>
        {likedVideosList.map((likedVideo) => (
          <div className="video-card card-w-25 mg-l-1 csr-point txt-s pd-b-05 mg-tb-05 flex-col flex-col-space-evenly">
            <div className="video-top mg-b-05 card-h-10">
              <img
                className="w-100 h-auto"
                src={`https://img.youtube.com/vi/${likedVideo.videoId}/hqdefault.jpg`}
                alt="Thumbnail"
              />
              <span>{likedVideo.duration}</span>
            </div>
            <p className="txt-white">{likedVideo.title}</p>
            <div className="flex flex-space-evenly">
              <Link
                className="link-text txt-black txt-deco-none pd-05 mg-05 bdr-thick bdr-yellow bdr-rad-m btn btn-secondary-yellow w-100"
                to={`/video/${likedVideo.videoId}`}
              >
                Watch Again
              </Link>
              <button
                onClick={() =>
                  removeLikeHandler(likedVideo.videoId, likedVideosList)
                }
                className="pd-05 mg-05 bdr-thick bdr-yellow bdr-rad-m btn btn-secondary-yellow w-100"
              >
                Remove Like
              </button>
            </div>
          </div>
        ))}
        <div id="notification-container"></div>
      </div>
      <br />
      
    </>
  );
};
