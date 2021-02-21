import React from "react";
import {useQuery} from "react-query";
import {useParams} from "react-router-dom";
import {getPokemon} from "../../api/api"

const Detail = () => {

    const {
        id
    } = useParams();

    const {
        data,
        isLoading,
        isError
    } = useQuery(['pokemon', id], () => getPokemon({name: id}));

    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Error..!</p>

    return (
        <pre>
            {JSON.stringify(data, null, 4)}
        </pre>
    )

}

export default Detail;