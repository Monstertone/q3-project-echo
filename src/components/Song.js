import React from 'react'

const Song = (props) => {
    console.log('img URL is', props.song.cover_url);
  return (

    <div className="songBox">



    <img src={props.song.cover_url} className="albumArt" />
    <p>{props.song.title}</p>
    <p>{props.song.artist}</p>
      <p>{props.song.album}</p>
      <button onClick={
  () => props.addSongToPlayList(props.song.id)
} className="addplay">Add to Play List</button>

    </div>
  )
}

export default Song
