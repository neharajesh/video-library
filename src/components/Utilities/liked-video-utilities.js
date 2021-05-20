export const addToLikedVideos = (videoId, likedVideosList, videoList) => { 
    const existingVideo = likedVideosList.find(video => video.videoId === videoId);
    if(!existingVideo) {
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
    const updatedLikedVideos = likedVideosList.filter(video => video.videoId !== videoId);
    return updatedLikedVideos;
}