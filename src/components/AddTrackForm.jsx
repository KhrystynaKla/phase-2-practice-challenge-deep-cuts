import React, {useState} from 'react'

function AddTrackForm({tracks, setTracks}) {
  const [newForm, setNewForm]=useState({
    title:'',
    artist:'',
    BPM: 0,
    image: ''
  })

  function handleSubmit(event){
    event.preventDefault()
    fetch('http://localhost:8001/tracks',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newForm)
    })
    .then(res=> res.json())
    .then(data => setTracks([...tracks, data]))
  }

  function handleChange(event){
    if (event.target.name==='BPM') {
      setNewForm({...newForm, [event.target.name]:Number(event.target.value)})
      console.log(event.target.value)
    } else {
      setNewForm({...newForm, [event.target.name]:(event.target.value)})
      console.log(event.target.value)
    }
  }
  return (
      <form onSubmit = {handleSubmit}>
        <div>
          <input onChange={handleChange} type="text" name="image" placeholder="Image URL"/>
          <input onChange={handleChange} type="text" name="title" placeholder="title" />
          <input onChange={handleChange} type="text" name="artist" placeholder="Artist" />
          <input onChange={handleChange} type="number" name="BPM" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm