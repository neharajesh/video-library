export const addToLikedVideos = (videoId, likedVideosList) => { 
    console.log("Adding to liked videos - from utilities")
    console.log(videoId)
    console.log(likedVideosList)
    const existingVideo = likedVideosList.find(video => video.id === videoId);
    console.log(existingVideo)
    if(!existingVideo) {
        console.log("video not found in liked videos list")
        const updatedLikedVideos = [...likedVideosList, existingVideo]
        return updatedLikedVideos;        
    }
    return likedVideosList;
}

export const removeFromLikedVideos = (videoId, likedVideosList) => {
    console.log("removing from liked videos - from utilities")
    const existingVideo = likedVideosList.find(video => video.id === videoId)
    if(!existingVideo) {
        return likedVideosList;
    }
    const updatedLikedVideos = likedVideosList.filter(video => video.id === videoId);
    return updatedLikedVideos;
}