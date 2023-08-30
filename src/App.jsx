import './App.css'
import SearchBar from './components/SearchBar'
import PokemonData from './components/PokemonList'
import { useState } from 'react'
import PokemonCard from './components/PokemonCard'


const App =() => {
  const [pokemons, setPokemon] = useState(PokemonData)
  const [types, setTypes] = useState([
  'All',
  'Normal',
  'Fire',
  'Water',
  'Electric',
  'Grass',
  'Ice',
  'Fighting',
  'Poison',
  'Ground',
  'Flying',
  'Psychic',
  'Bug',
  'Rock',
  'Ghost',
  'Dragon']);
  let [filteredText,setFilteredText] = useState(pokemons);

  const [selectedValue, setSelectedValue] = useState('');

  const handleEventFilter = (event)=>{
    const selectedValue = event.target.value;
    console.log(selectedValue)

    if(selectedValue ==='All'){
      setFilteredText(pokemons);

   }
    else {
     const filteredText = pokemons.filter(pokemon=>pokemon.type1 === selectedValue || pokemon.type2 === selectedValue);
     setFilteredText(filteredText);
     console.log(filteredText);
    }
   
  }


  // for search name on input
  const [searchName, setSearchName] = useState('');

  const handleSearch = (event) => {
    const searchData = event.target.value;
    setSearchName(searchData);
    
      // setFilteredText(pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchData.toLowerCase())));
      const filteredPokemons = pokemons.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchData.toLowerCase())
      );
    
      setFilteredText(filteredPokemons);
  
    
    
  };

  return (
    <>
 
    <SearchBar types={types} selectedValue={selectedValue} handleEventFilter={handleEventFilter} handleSearch={handleSearch} searchName={searchName}/>
    
      <div className='landing-page'>
       <PokemonCard pokemons={filteredText}/>

      </div>
    </>
  )
}

export default App
