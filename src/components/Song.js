import React from 'react'

const Song = (props) => {
    console.log('img URL is', props.song.cover_url);
  return (

    <div className="songBox">



    <img src={props.song.cover_url} className="albumArt" />
    <p className="song-title">{props.song.title}</p>
    <p className="song-artist"> Artist: {props.song.artist}  </p>
      <p className="song-artist">Album: {props.song.album}</p><br />
      <button onClick={
  () => props.addSongToPlayList(props.song.id)
} className="addplay">Add to Play List</button>

    </div>
  )
}

export default Song
