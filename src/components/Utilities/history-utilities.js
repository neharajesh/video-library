export const addToHistory = (video, videoHistoryList) => {
    const existingVideo = videoHistoryList.find(currentVideo => currentVideo.videoId === video.videoId)
    if(existingVideo) {
        return videoHistoryList
    }
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