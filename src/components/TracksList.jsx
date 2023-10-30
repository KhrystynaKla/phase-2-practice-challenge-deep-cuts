import React from 'react'
import Track from './Track.jsx'

function TracksList({tracks}) {
  const inform = tracks.map(track=>{
    return <Track track={track} key={track.title}/>
  })
  return (
    <table>
      <tbody>
        <tr>
          <th>
          <h3 className="row-image">Img</h3>

          </th>
          <th>
            <h3 className="row-title">Title</h3>
          </th>
          <th>
            <h3 className="">Artist</h3>
          </th>
          <th>
            <h3 className="">BPM</h3>
          </th>
        </tr>
        {inform}
      </tbody>
    </table>
  )
}

export default TracksList