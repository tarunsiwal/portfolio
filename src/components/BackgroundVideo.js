import React, { useState } from 'react';

const BackgroundVideo = ({ videoId }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const style ={
        pointerEvents: "none",
        position:"absolute",
        wisth : "100%"
    }
    return (
        <div className="video-container" style={style}>
            {isPlaying && (
                <iframe
                    title="YouTube Video"
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&mute=1&disablekb=1&modestbranding=1&showinfo=0&iv_load_policy=3`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            )}
        </div>
    );
};

export default BackgroundVideo;
