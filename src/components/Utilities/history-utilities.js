export const addToHistory = (videoId, videoHistoryList) => {
    const existingVideo = videoHistoryList.find(video => video.id === videoId);
    if(!existingVideo) {
        return [...videoHistoryList, existingVideo];
    }
    return videoHistoryList
}

export const removeFromHistory = (videoId, videoHistoryList) => {
    const existingVideo = videoHistoryList.find(video => video.id === videoId)
    if(!existingVideo) {
        return videoHistoryList
    }
    const updatedList = videoHistoryList.filter(video => video.id === videoId)
    return updatedList
}