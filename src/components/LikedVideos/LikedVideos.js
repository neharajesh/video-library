import { useLikedVideos } from "../../context/liked-videos-context"
import "../../styles.css"

export const LikedVideos = () => {
    const {likedVideosList} = useLikedVideos();
    console.log(likedVideosList)
    return(<>
        {likedVideosList.length === 0 && <h1 class="txt-white">Add videos!</h1>}
        {[likedVideosList].map(likedVideo => 
            <div className="bdr-thick bdr-yellow card-w-20 h-25">
                <p className="txt-white">{likedVideo.name}</p>
            </div>
        )}        
    </>)
}