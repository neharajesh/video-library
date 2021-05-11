import { useLikedVideos } from "../../context/liked-videos-context"

export const LikedVideos = () => {
    const {likedVideosList} = useLikedVideos();
    return(<>
        {likedVideosList.map(likedVideo => 
            <div className="bdr-thick bdr-yellow card-w-20 h-25">
                {likedVideo.name}
            </div>
        )}
    </>)
}