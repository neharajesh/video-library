export const addToLikedVideos = (videoId, likedVideosList, videoList) => { 
    console.log("Adding to liked videos - from utilities")
    const existingVideo = likedVideosList.find(video => video.videoId === videoId);
    if(!existingVideo) {
        console.log("video not found in liked videos list")
        const video = videoList.find(video => video.videoId === videoId);
        const updatedLikedVideos = [...likedVideosList, video]
        return updatedLikedVideos;        
    }
    return likedVideosList;
}

export const removeFromLikedVideos = (videoId, likedVideosList) => {
    console.log("removing from liked videos - from utilities")
    const existingVideo = likedVideosList.find(video => video.videoId === videoId)
    if(!existingVideo) {
        return likedVideosList;
    }
    const updatedLikedVideos = likedVideosList.filter(video => video.id === videoId);
    return updatedLikedVideos;
}