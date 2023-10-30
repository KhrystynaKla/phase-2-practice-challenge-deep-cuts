import React, {useState, useEffect} from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {
  const [tracks,setTracks]=useState([])
  const [searchText, setSearchText]=useState('')

  useEffect(()=>{
    fetch('http://localhost:8001/tracks')
    .then(res=>res.json())
    .then(data=> setTracks(data))
  },[])

  const filteredArray= tracks.filter(track=>{
    return (track.title.toLowerCase().includes(searchText.toLowerCase()) || track.artist.toLowerCase().includes(searchText.toLowerCase()))
  })
  console.log(filteredArray)

  
    
  return (
    <div>
      <Search searchText={searchText} setSearchText={setSearchText}/>
      <AddTrackForm tracks={tracks} setTracks={setTracks}/>
      <TracksList tracks={filteredArray}/>
    </div>
  )
}

export default TracksPage