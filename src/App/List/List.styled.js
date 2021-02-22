import styled from 'styled-components'

export const ListContainer = styled.section`
    min-height:100vh;
`

export const ListPokemons = styled.div`
    display:flex;
    flex-wrap:wrap;
`

export const ListPokemon = styled.article`
    padding:.8rem;
    background:${props => props.theme.colors.backgroundSecondary};
    border-bottom:.2rem ${props => props.theme.colors.border} solid;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    font-size:1.4rem;
    font-weight:600;

    flex-grow:1;
    flex-shrink:0;

    width:calc(100%);

    & a {
        display:block;
        text-transform:capitalize;
    }

    @media ${props => props.theme.media.small} {
        margin-bottom:.8rem;
        box-shadow: ${props => props.theme.shadows.shadow4};
        border:.2rem ${props => props.theme.colors.border} solid;
        border-radius: ${props => props.theme.radius.big};
    }

    @media ${props => props.theme.media.medium} {
        width:calc(100%/3 - .8rem);
        margin-bottom:.8rem;
        margin-right:.8rem;

        &:nth-child(6n),
        &:last-child(){
            margin-right:0;
        }
    }

    @media ${props => props.theme.media.large} {
        width:calc(100%/6 - 3.2rem);
        margin-bottom:1.6rem;
        margin-right:1.6rem;

        &:nth-child(6n),
        &:last-child(){
            margin-right:0;
        }
    }
`
