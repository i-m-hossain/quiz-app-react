import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../../../../hooks/useVideoList";
import Video from "../Video/Video";

const Videos = () => {
    const [page, setPage] = useState(1);
    const { loading, error, videos, hasMore } = useVideoList(page);

    return (
        <div>
            {videos.length > 0 && (
                <InfiniteScroll
                    dataLength={videos.length} //This is important field to render the next data
                    next={() => setPage(page + 8)}
                    loader="Loading"
                    hasMore={hasMore}
                >
                    {videos.map((video) =>
                        video.noq > 0 ? (
                            <Link
                                key={video.youtubeID}
                                to={`/quiz/${video.youtubeID}`}
                                state={video.title}
                            >
                                <Video
                                    title={video.title}
                                    id={video.youtubeID}
                                    noq={video.noq}
                                />
                            </Link>
                        ) : (
                            <Video
                                title={video.title}
                                id={video.youtubeID}
                                noq={video.noq}
                                key={video.youtubeID}
                            />
                        )
                    )}
                </InfiniteScroll>
            )}
            {!loading && videos.length === 0 && <div>No data found</div>}
            {loading && <div>Loading...</div>}
            {error && <div>there was an error</div>}
        </div>
    );
};

export default Videos;
