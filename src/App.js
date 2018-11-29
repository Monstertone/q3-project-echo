import React, { Component } from 'react';
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import './App.css';
import RightPanel from './components/RightPanel'
import axios from 'axios';
import Footer from './components/Footer'


class App extends Component {

  state = {
    songs:[]
  }

  songsInPlayList = ()=> this.state.songs.filter(song => song.inList)


  playListUrls = ()=> this.songsInPlayList().map(song => song.file_url)






  componentDidMount() {

    fetch('http://localhost:8000/songs')
    .then(res => res.json())
    .then(songs => this.setState({ songs }))
    .catch(err=>console.log(err))
  }

addSongToPlayList = id  => {
  axios.patch(`http://localhost:8000/songs/add/${id}`)
  .then(res => {
    let theOtherSongs = this.state.songs.filter(song => song.id !== id)
    let orderedSongs = [...theOtherSongs, res.data].sort((a,b)=> a.id > b.id)
    this.setState({songs: orderedSongs})
  })
}
removeSongFromPlayList = id  => {
  axios.patch(`http://localhost:8000/songs/remove/${id}`)
  .then(res => {
    let theOtherSongs = this.state.songs.filter(song => song.id !== id)
    let orderedSongs = [...theOtherSongs, res.data].sort((a,b)=> a.id > b.id)
    this.setState({songs: [...theOtherSongs, res.data]})
  })
}

  render() {
  console.log('Songs in Playlist',this.playListUrls())


    return (

      <div className="App app-style">
          <div className="styleWrapper">
            < Header />

            <div className="row">
                <div className="col"><LeftPanel playListUrls={this.playListUrls()} songsInPlayList={this.songsInPlayList()} removeSongFromPlayList={this.removeSongFromPlayList}/></div>
                <div className="col songlistpadding"><RightPanel songs={this.state.songs} addSongToPlayList={this.addSongToPlayList}/></div>
            </div>
        </div>
           <Footer playListUrls={this.playListUrls()}/>
      </div>
    );
  }
}

export default App;
