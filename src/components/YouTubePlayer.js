import React, { useEffect, useRef } from 'react';
/* global YT */
const YouTubePlayer = ({ videoId }) => {
    const playerRef = useRef(null);
    const style ={
        pointerEvents: "none",
        position:"absolute",
        wisth : "100%"
    }
    // useEffect(() => {
    //     // Initialize YouTube player when component mounts
    //     const onPlayerReady = (event) => {
    //         // Hide YouTube logo and controls
    //         event.target.setOption('modestbranding', true);
    //         event.target.setOption('controls', false);
    //     };

    //     // Create YouTube player
    //     const player = new window.YT.Player(playerRef.current, {
    //         videoId: videoId,
    //         playerVars: {
    //             autoplay: 1,
    //             loop: 1,
    //             controls: 0,
    //             modestbranding: 1,
    //             iv_load_policy: 3,
    //             disablekb: 1,
    //             mute: 1,
    //             rel: 0
    //         },
    //         events: {
    //             'onReady': onPlayerReady
    //         }
    //     });
//////////////////////////////////////////////////
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player) after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    //width: '100%',
    videoId: videoId,
    playerVars: {
      'mute': 1, // Mute the video
      'rel': 0, // Disable related videos at the end
      'controls': 0 // Hide player controls
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo(); // Autoplay the video when ready
}

// The API calls this function when the player's state changes.
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    // Video has ended, restart it
    player.seekTo(0);
  }
}

// Clean up on component unmount
/*
    return () => {
        player.destroy();
    };
*/

///////////////////////////////////////////////
        // Clean up on component unmount
    //     return () => {
    //         player.destroy();
    //     };
    // }, [videoId]);

    return (
        // <div ref={playerRef} style={style}></div>
        <div id="player"></div>
    );
};

export default YouTubePlayer;
