import React, {Component} from 'react';
import Jukebox from '../jukebox1.png';
import PlayItem from './PlayItem';


const LeftPanel = (props) => {
  let playListUrls = props.playListUrls
  let songPlayList = props.songsInPlayList.map(song => <PlayItem key={song.id} song={song} removeSongFromPlayList= {props.removeSongFromPlayList} />)
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



  console.log('right side play list', playListUrls)




  return (

    <div className="lightgrey fixedpos" >

      <img src={Jukebox} alt="jukebox" className="jukeimg" /><br />
      <button onClick={()=>{audio.play()}} className="orderedplay">Ordered Play</button>
      <button onClick="" className="orderedplay">Random Play</button>

        {songPlayList}
    </div>
  )
}

export default LeftPanel
