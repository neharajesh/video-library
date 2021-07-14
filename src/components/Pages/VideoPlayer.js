import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router";
import { useLikedVideos } from "../../context/liked-videos-context";
import { useVideo } from "../../context/video-context";
import { useVideoHistory } from "../../context/video-history-context";
import { dateFormatter } from "../Utilities/date-utility";
import { addToHistory } from "../Utilities/history-utilities";
import { addToLikedVideos } from "../Utilities/liked-video-utilities";
import { showNotification } from "../Utilities/toast";

export const VideoPlayer = () => {
  const { videoId } = useParams();
  const { videoList } = useVideo();
  const video = videoList.find((video) => video.videoId === videoId);
  const { videoHistoryList, setVideoHistoryList } = useVideoHistory();
  const { likedVideosList, setLikedVideosList } = useLikedVideos();

  useEffect(() => {
    const updatedList = addToHistory(video, videoHistoryList);
    setVideoHistoryList(updatedList);
  }, []);

  const likedVideoHandler = (videoId, likedVideosList) => {
    showNotification("Video Liked");
    const updatedLikedVideos = addToLikedVideos(
      videoId,
      likedVideosList,
      videoList
    );
    setLikedVideosList(updatedLikedVideos);
  };

  return (
    <>
      <div className="video-page flex-col w-100 h-100 mg-l-2">
        <div className="w-100 h-auto flex mg-tb-1">
          <div className="flex-col mg-l-1">
            <div className="txt-xl mg-tb-1">{video.title}</div>
          </div>
        </div>
        <div className="container-videoplayer">
          <ReactPlayer className="react-player"
            width="100%"
            height="60rem"
            url={`https://www.youtube.com/watch?v=${video.videoId}`}
          />
        </div>
        <div className="mg-1 w-100">
            <p>
                Upload Date:{"  "}
                <span className="txt-700">{dateFormatter(video.uploadDate)}</span>
            </p>
            <p>
                Duration: <span className="txt-700">{video.duration}</span>
            </p>
            <button
                className="pd-05 mg-05 mg-t-2 bdr-thick bdr-yellow bdr-rad-m btn btn-secondary-yellow card-w-20"
                onClick={() => likedVideoHandler(video.videoId, likedVideosList)}
            >
                Like Video
            </button>
        </div>
        <div id="notification-container"></div>
      </div>
    </>
  );
};
