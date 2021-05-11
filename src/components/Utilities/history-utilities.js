export const addToHistory = (videoId, videoHistoryList) => {
    //check if video id is there in videoHistoryList
    const existingVideo = videoHistoryList.find(video => video.id === videoId);
    //if it exists, do not add, just return the existing list
    if(!existingVideo) {
        return [...videoHistoryList, existingVideo];
    }
    //if it does not exist, add to the list
    else {
        return videoHistoryList
    }
}

export const removeFromHistory = (videoId, videoHistoryList) => {
    //check if video id exists in videoHistoryList
    const existingVideo = videoHistoryList.find(video => video.id === videoId)
    //if it exists, remove it
    if(!existingVideo) {
        return videoHistoryList
    }
    //if it does not, return videoHistoryList
    const updatedList = videoHistoryList.filter(video => video.id === videoId)
    return updatedList
}