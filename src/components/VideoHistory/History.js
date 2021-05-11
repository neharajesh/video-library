import { useVideoHistory } from "../../context/video-history-context"

export const History = () => {
    const {videoHistoryList} = useVideoHistory();
    return(<>
        {videoHistoryList.map(video => (
            <div className="flex flex-row-wrap bdr-thick bdr-yellow mg-1 pd-1 card-w-20 h-25" key={video.id}>
                {video.name}
            </div>
        ))}
    </>)
}