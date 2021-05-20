export const addToHistory = (video, videoHistoryList) => {
    // const existingVideo = videoHistoryList.find(current => current.videoId === videoId);
    // if(!existingVideo) {
    //     const currentVideo = videoList.find(video => video.videoId === videoId)
    //     return [...videoHistoryList, currentVideo];
    // }
    // return videoHistoryList
    const updatedHistory = [...videoHistoryList, video];
    return updatedHistory;
}

export const removeFromHistory = (videoId, videoHistoryList) => {
    const existingVideo = videoHistoryList.find(video => video.videoId === videoId)
    if(!existingVideo) {
        return videoHistoryList
    }
    const updatedList = videoHistoryList.filter(video => video.videoId !== videoId)
    return updatedList
}