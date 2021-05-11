export const addToLikedVideos = (videoId, likedVideosList) => { 
    //check if video exists in likedvideoslist
    const existingVideo = likedVideosList.find(video => video.id === videoId);
    //if it does not, add to list
    if(!existingVideo) {
        return [...likedVideosList, existingVideo]
    }
    //if it does, return exisiting list
    return likedVideosList;
}

export const removeFromLikedVideos = (videoId, likedVideosList) => {
    //check if video exists in likedvideoslist
    const existingVideo = likedVideosList.find(video => video.id === videoId)
    //if it does not, return existing list
    if(!existingVideo) {
        return likedVideosList;
    }
    //if it does, remove from list
    const updatedLikedVideos = likedVideosList.filter(video => video.id === videoId);
    return updatedLikedVideos;
}