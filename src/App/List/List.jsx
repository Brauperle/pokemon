import React, { useContext } from 'react'
import { StoreContext } from '../../store/StoreProvider'
import { Link } from 'react-router-dom'
import { useInfiniteQuery } from 'react-query'
import { getPokemons2 } from '../../api/api'
import Container from '../Container/Container'
import { ListContainer, ListPokemons, ListPokemon, ListPokemonShowMore } from './List.styled'

const List = () => {
  const {
    state
  } = useContext(StoreContext)

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    isSuccess
  } = useInfiniteQuery('pokemons', getPokemons2, {
    getNextPageParam: (lastPage, pages) => {
      return lastPage.next
    }
  })

  return (
    <Container>
      <ListContainer>
        {isLoading && (<p>Loading...</p>)}
        {isError && (<p>Error..!?</p>)}
        {isSuccess && (
          <>
            <ListPokemons data-testid="ListPokemons">
              {data.pages && data.pages
                .map(group => {
                  return (
                    group.results
                      .filter(pokemon => pokemon.name.toUpperCase().includes(state.search.toUpperCase()))
                      .map(pokemon => {
                        return (
                          <ListPokemon key={pokemon.name} data-testid={pokemon.name}>
                            <Link to={`/${pokemon.name}`}>
                              {pokemon.name}
                            </Link>
                          </ListPokemon>
                        )
                      })
                  )
                })
            }
            </ListPokemons>
            {!state.search && (
              <ListPokemonShowMore disabled={isFetchingNextPage || !hasNextPage} type="button" onClick={() => {
                fetchNextPage()
              }}>
                {
                isFetchingNextPage
                  ? 'Loading more Pokémon...'
                  : hasNextPage
                    ? 'Show 250 more Pokémon'
                    : 'Nothing more to load'
              }
              </ListPokemonShowMore>
            )}
          </>
        )}
      </ListContainer>
    </Container>
  )
}

export default List
