import React, {Component} from 'react';
import Jukebox from '../jukebox1.png';
import PlayItem from './PlayItem';


const LeftPanel = (props) => {
  let playListUrls = props.playListUrls
  let songPlayList = props.songsInPlayList.map(song => <PlayItem key={song.id} song={song} removeSongFromPlayList= {props.removeSongFromPlayList} />)

//Function to play audio list

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

//FISHER-YATES shuffling algorithm

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;

}



let shuffledList = playListUrls.slice();



let shuffledList1 = shuffle(shuffledList)






  console.log('right side play list', playListUrls)
  console.log('shuffled list', shuffledList)




  return (

    <div className="lightgrey fixedpos" >

      <img src={Jukebox} alt="jukebox" className="jukeimg" /><br />
      <button onClick={()=>{audio.play()}} className="orderedplay">Ordered Play</button>
      <button onClick={()=>{shuffle(playListUrls)}} className="orderedplay">Random Play</button>

        {songPlayList}
    </div>
  )
}

export default LeftPanel
