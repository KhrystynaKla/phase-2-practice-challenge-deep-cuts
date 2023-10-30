import React from 'react'

function Search({setSearchText}) {

  function handleChange(event){
    setSearchText(event.target.value)
  }

  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          onChange={handleChange}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search