import React from 'react';
import './VideoPlayer.css'

interface YouTubePlayerProps {
    videoId: string;
    width?: number;
    height?: number;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, width = 749, height = 427 }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <iframe
            width={width}
            height={height}
            src={embedUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
};

export default YouTubePlayer;
