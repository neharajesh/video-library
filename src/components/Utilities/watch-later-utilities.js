export const addToWatchLater = (videoId, watchLaterList, videoList) => {
    const existingVideo = watchLaterList.find(video => video.videoId === videoId);
    if(!existingVideo) {
        const currentVideo = videoList.find(video => video.videoId === videoId);
        const updatedList = [...watchLaterList, currentVideo];
        return updatedList;
    }
    return watchLaterList;
}

export const removeFromWatchLater = (videoId, watchLaterList)  => {
    const existingVideo = watchLaterList.find(video => video.videoId === videoId);
    if(!existingVideo) {
        return watchLaterList;
    }
    const updatedList = watchLaterList.filter(video => video.videoId !== videoId);
    return updatedList;
}