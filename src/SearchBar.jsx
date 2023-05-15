import React from 'react'
import { useState } from 'react'

function SearchBar({onSubmit}) {
const [input, setInput] = useState('')

const handleSubmit = (e) => {
  e.preventDefault()
  onSubmit(input)
}

const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='search-bar mb-4'>
      <form onSubmit={handleSubmit}>
        <input type='text' value={input} placeholder='Enter city' onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar
