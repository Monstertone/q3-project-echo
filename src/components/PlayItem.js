import React from 'react'

const PlayItem = (props)=> {
  return (
    <div className="songplaylistbox"><p className="song-title">{props.song.title} </p>
    <button onClick={() => props.removeSongFromPlayList(props.song.id)} className="addplay">Remove</button>

     </div>
  )
}

export default PlayItem
