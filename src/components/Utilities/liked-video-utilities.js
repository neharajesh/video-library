export const addToLikedVideos = (videoId, likedVideosList) => { 
    const existingVideo = likedVideosList.find(video => video.id === videoId);
    if(!existingVideo) {
        return [...likedVideosList, existingVideo]
    }
    return likedVideosList;
}

export const removeFromLikedVideos = (videoId, likedVideosList) => {
    const existingVideo = likedVideosList.find(video => video.id === videoId)
    if(!existingVideo) {
        return likedVideosList;
    }
    const updatedLikedVideos = likedVideosList.filter(video => video.id === videoId);
    return updatedLikedVideos;
}