import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player';

const Footer = (props) => {
  let playListUrls = props.playListUrls

  var audio = new Audio(),
    i = 0;


audio.addEventListener('ended', function () {
    i = ++i < playListUrls.length ? i : 0;
    console.log(i)
    audio.src = playListUrls[i];
    audio.play();
}, true);
audio.volume = 0.3;
audio.loop = false;
audio.src = playListUrls[0];
// audio.play();

  return (


    <nav className="navbar echobottom fixed-bottom">

      <h5>&copy; 2018  Echo Music Streams</h5>

    <button onClick={()=>audio.play()}>PLAY</button>

    <audio controls />

   </nav>
  )
}

export default Footer;
