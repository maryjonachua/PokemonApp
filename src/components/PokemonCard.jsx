import React from 'react'
import './PokemonCard.css'

const PokemonCard = ({pokemons}) => {
  return (
    <>
        <div className='container'>
        {pokemons.length === 0? (<><div className='Error'>No Found Result.</div></>):(pokemons.map((pokemon, index) => {
          return (
            <div className="pokemon-card" key={pokemon.dexNo}>
              <div className="pokemon-img">
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.dexNo}.png`} />
              </div>
              <div className="pokemon-info">
                    <div>
                        <p>#{pokemon.dexNo}</p>
                        <h2>{pokemon.name}</h2>
                    </div>
                    <div className="pokemon-type">
                        <p>Type:</p>

                        <div className='Ptype'>
                        <div className={pokemon.type1}>{pokemon.type1}</div>
                        <div className={pokemon.type2 !=='NA'? pokemon.type2 : ""}>{pokemon.type2 !=='NA'? pokemon.type2 : ""}</div>
                        </div>
                        
                    </div>
              </div>
            </div>
          );
        }))}
            
        </div>
    </>
    
  )
}

export default PokemonCard