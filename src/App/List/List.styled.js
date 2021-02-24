import styled from 'styled-components'

export const ListContainer = styled.section`
    min-height:100vh;
`

export const ListPokemons = styled.div`
    display:flex;
    flex-wrap:wrap;
`

export const ListPokemon = styled.article`
    background:${props => props.theme.colors.backgroundSecondary};
    border-bottom:.2rem ${props => props.theme.colors.border} solid;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    font-size:1.4rem;
    font-weight:600;

    flex-shrink:0;

    width:calc(100%);

    & a {
        display:block;
        text-transform:capitalize;
        padding:.8rem;
    }

    &:hover {
        border:.2rem ${props => props.theme.colors.highlightSecondary} solid;
        cursor:pointer;
        & a {color: ${props => props.theme.colors.highlightSecondary};}  
    }
    @media ${props => props.theme.media.small} {
        margin-bottom:.8rem;
        box-shadow: ${props => props.theme.shadows.shadow4};
        border:.2rem ${props => props.theme.colors.border} solid;
        border-radius: ${props => props.theme.radius.base};
    }

    @media ${props => props.theme.media.medium} {
        width:calc(100%/3 - .53333rem);

        margin-bottom:.8rem;
        margin-right:.8rem;

        &:nth-child(3n),
        &:last-child{
            margin-right:0;
        }
    }

    @media ${props => props.theme.media.large} {
        width:calc(100%/6 - 1.33333rem);
        margin-bottom:1.6rem;
        margin-right:1.6rem;

        &:nth-child(3n) {
            margin-right:1.6rem;
        }
        &:nth-child(6n){
            margin-right:0;
        }

    }
`
export const ListPokemonShowMore = styled.button`
    display:block;
    max-width:fit-content;
    margin:0 auto;
    border:.2rem ${props => props.theme.colors.border} solid;
    background:${props => props.theme.colors.backgroundSecondary};
    box-shadow: ${props => props.theme.shadows.shadow4};
    border-radius: 999rem;
    padding:1.6rem 2.4rem;
    font-size:2rem;
    font-weight:600;
    color:${props => props.theme.colors.textPrimary};
    margin-top:2.4rem;
    margin-bottom:2.4rem;
    &:hover{
        border:.2rem ${props => props.theme.colors.highlightSecondary} solid;
        cursor:pointer;
    }
    &:disabled {
        cursor:not-allowed;
    }
`
