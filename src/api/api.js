const API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/'

const getPokemons = async ({ limit, offset }) => {
  const l = limit ? `?limit=${limit}` : ''
  const o = offset ? `?offset=${offset}` : ''

  const r = await fetch(API_ENDPOINT + l + o)
  if (!r) throw new Error('getPokemons:fetch failed')
  return r.json()
}

const getPokemon = async ({ name }) => {
  const r = await fetch(API_ENDPOINT + name)
  if (!r) throw new Error('getPokemon:fetch failed')
  return r.json()
}

export {
  getPokemons,
  getPokemon
}
