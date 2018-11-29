import React, {Component} from 'react';
import Song from './Song'


class RightPanel extends Component {
  render (){
    let SongList = this.props.songs
    .map(song => <Song key={song.id} song={song} addSongToPlayList={this.props.addSongToPlayList}/>)
    return (
      <div className="lightgrey songlistpadding">
         {SongList}
      </div>
    )
  }
}

export default RightPanel
