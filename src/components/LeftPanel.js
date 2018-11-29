import React, {Component} from 'react';
import Jukebox from '../jukebox1.png';
import PlayItem from './PlayItem';


const LeftPanel = (props) => {
  const audio = new Audio
  let playListUrls = props.playListUrls
  let songPlayList = props.songsInPlayList.map(song => <PlayItem key={song.id} song={song} removeSongFromPlayList= {props.removeSongFromPlayList} />)
  let i=0;



  console.log('right side play list', playListUrls)




  return (

    <div className="lightgrey" >

      <img src={Jukebox} alt="jukebox" className="jukeimg" /><br />
      <button onClick="" className="addplay">Ordered Play</button>
      <button onClick="" className="addplay">Random Play</button>

        {songPlayList}
    </div>
  )
}

export default LeftPanel
