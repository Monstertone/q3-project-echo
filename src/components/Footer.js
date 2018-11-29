import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Footer = (props) => {
  let playListUrls = props.playListUrls
  return (
    <nav className="navbar navbar-dark bg-dark">

      <a className="navbar-brand" href="#">&copy; 2018  Echo Music Streams</a>
      <ReactAudioPlayer
      src={playListUrls[1]}
      controls/>
   </nav>
  )
}

export default Footer;
