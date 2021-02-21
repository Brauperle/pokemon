import React from "react";
import {useQuery} from "react-query";
import {useParams} from "react-router-dom";
import {getPokemon} from "../../api/api"
import Container from "../Container/Container";
import {
    DetailContainer, 
    DetailPokemonSection, 
    DetailPokemonSectionHeader, 
    DetailPokemonSectionItem, 
    DetailPokemonImg} from "./Detail.styled"

const Detail = () => {

    const {
        id
    } = useParams();

    const {
        data,
        isLoading,
        isError,
        isSuccess
    } = useQuery(['pokemon', id], () => getPokemon({name: id}));
    
    return (
        <Container>
            <DetailContainer>
                {isLoading && (<p>Loading...</p>)}
                {isError && (<p>Error..!?</p>)}
                {isSuccess && (
                    <>
                        <DetailPokemonSection gridArea="pSprites">
                            {data && data.sprites && data.sprites.front_default && (
                                <DetailPokemonImg>
                                    <img src={data.sprites.front_default} alt={id} />
                                </DetailPokemonImg>
                            )}
                         </DetailPokemonSection>

                        <DetailPokemonSection gridArea="pName">
                            {data && data.name && data.id && <h1>{data.id}. {data.name}</h1>}
                        </DetailPokemonSection>

                        <DetailPokemonSection gridArea="pMoves">
                            <DetailPokemonSectionHeader>Moves List</DetailPokemonSectionHeader>
                            {data && data.moves && data.moves.map((move, i) => {
                                return (
                                    <DetailPokemonSectionItem key={`move_${i}`}>
                                        {move.move.name}
                                    </DetailPokemonSectionItem>
                                )
                            })}
                        </DetailPokemonSection>

                        <DetailPokemonSection gridArea="pTypes">
                            <DetailPokemonSectionHeader>Types List</DetailPokemonSectionHeader>
                            {data && data.types && data.types.map((type, i) => {
                                return (
                                    <DetailPokemonSectionItem key={`type_${i}`}>
                                        {type.type.name}
                                    </DetailPokemonSectionItem>
                                )
                            })} 
                        </DetailPokemonSection>
                    </>
                )}
            </DetailContainer>
        </Container>
    )

}

export default Detail;