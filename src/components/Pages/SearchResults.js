import { Link } from "react-router-dom";
import { useSearch } from "../../context/search-context";
import { useVideo } from "../../context/video-context";

export const SearchResults = () => {
  const { searchString } = useSearch();
  const { videoList } = useVideo();

  const subStringArray = searchString.split(" ");

  const checkifStringExists = (videoTitle, subStringArray) => {
      let result = false;
    subStringArray.forEach((subString) => {
      if (videoTitle.toLowerCase().includes(subString.toLowerCase()))
        result = true;
    else result = false;
    });
    return result
  };

  const findVideos = () => {
    const searchResults = [];
    videoList.map(video => {
        if(checkifStringExists(video.title, subStringArray)) {
            searchResults.push(video)
        }
    })
    return searchResults;
  };

  const results = findVideos();

  return (
    <>
      <div className="w-100 h-auto">
        <h1>Search Results Page</h1> <br />
        <p>You searched for : {searchString}</p> <br />
        <div container-video flex flex-row-wrap>
          {results.length === 0
            ? "Results not found, try again"
            : `${results.length} hits found`}
        </div>
        <div>
            {results.map(video => (
                <div className="video-card card-w-25 mg-l-1 csr-point txt-s pd-b-05 mg-tb-05 flex-col flex-col-space-evenly">
                    <div className="video-top mg-b-05 card-h-10">
                    <img
                        className="w-100 h-auto"
                        src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                        alt="Thumbnail"
                    />
                    <span>{video.duration}</span>
                    </div>
                    <p className="txt-white">{video.title}</p>
                    <div className="flex flex-space-evenly">
                    <Link
                        className="link-text txt-black txt-deco-none pd-05 mg-05 bdr-thick bdr-yellow bdr-rad-m btn btn-secondary-yellow w-100"
                        to={`/video/${video.videoId}`}
                    >
                        Watch Again
                    </Link>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </>
  );
};
