import React from 'react';

const Footer = (props) => {
  let playListUrls = props.playListUrls
  return (
    <nav className="navbar navbar-dark bg-dark">
     <audio src={playListUrls[0]} controls></audio>
      <a className="navbar-brand" href="#">&copy; 2018  Echo Music Streams</a>
   </nav>
  )
}

export default Footer;
