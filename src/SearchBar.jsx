import React from 'react'
import { useState } from 'react'
import './styles/weatherCard.css';

function SearchBar({onSubmit}) {
const [input, setInput] = useState('')

const handleSubmit = (e) => {
  e.preventDefault()
  onSubmit(input)
  setInput('')
}

const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='search-bar mb-4'>
      <form onSubmit={handleSubmit}>
        <input className='search' type='text' value={input} placeholder='Enter a city or country to search' onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar
