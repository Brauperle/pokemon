import React, { useContext } from 'react'
import { StoreContext } from '../../store/StoreProvider'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getPokemons } from '../../api/api'
import Container from '../Container/Container'
import { ListContainer, ListPokemons, ListPokemon } from './List.styled'

const List = () => {
  const {
    state
  } = useContext(StoreContext)

  const {
    data,
    isLoading,
    isError,
    isSuccess
  } = useQuery('pokemons', () => getPokemons({ limit: 10000, offset: 0 }))

  return (
    <Container>
      <ListContainer>
        {isLoading && (<p>Loading...</p>)}
        {isError && (<p>Error..!?</p>)}
        {isSuccess && (
          <ListPokemons data-testid="ListPokemons">
            {data.results && data.results
              .filter(pokemon => pokemon.name.toUpperCase().includes(state.search.toUpperCase()))
              .map(pokemon => {
                return (
                  <ListPokemon key={pokemon.name} data-testid={pokemon.name}>
                    <Link to={`/${pokemon.name}`}>
                      {pokemon.name}
                    </Link>
                  </ListPokemon>
                )
              })}
          </ListPokemons>
        )}
      </ListContainer>
    </Container>
  )
}

export default List
