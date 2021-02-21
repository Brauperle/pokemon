import React from "react";
import {Link} from "react-router-dom";
import {useQuery} from "react-query";
import {getPokemons} from "../../api/api"

const List = () => {

    const {
        data,
        isLoading,
        isError
    } = useQuery('pokemons', () => getPokemons({limit: 10000, offset: 0}));

    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Error..!</p>

    const {
        count,
        next,
        previous,
        results
    } = data;

    return (
        <>
            {results.map(pokemon => (<p key={pokemon.name}><Link to={`/${pokemon.name}`}>{pokemon.name}</Link></p>))}
        </>
    )
}

export default List;