import React from 'react'
import './SearchBar.css'


const SearchBar = ({types,handleEventFilter,selectedValue,searchName,handleSearch}) => {
  return (
    <>
    <div className='searchbar-container'>
        <div className='logo'><img alt='Pokedex logo'src='assets/Pokedex_logo.png'/></div>
    
        <div className='search-container'>
            <input placeholder='Search Pokemon Name...' value={searchName} onChange={handleSearch}/>
        </div>

        <div className='filter-container'>
        <select value={selectedValue} onChange={handleEventFilter}>
        <option>Filter Type</option>
        {types.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}

      </select>
      
        </div>
    </div>    
    </>
  )
}

export default SearchBar
