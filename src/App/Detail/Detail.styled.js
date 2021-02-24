import styled, { css } from 'styled-components'

export const DetailContainer = styled.section`
    min-height:100vh;

    display : grid;
    grid-template-areas: 
            "pName"
            "pSprites"
            "pTypes"
            "pMoves";
    grid-template-columns: 1fr;
    column-gap: 1.6rem;
    row-gap: 1.6rem;

    padding-bottom:2.4rem;

    @media ${props => props.theme.media.small} {
        padding-bottom:3.2rem;
        display : grid;
        grid-template-areas: 
            "pName"
            "pSprites"
            "pTypes"
            "pMoves";
        grid-template-columns: 1fr;
    }
    @media ${props => props.theme.media.medium} {
        grid-template-areas: 
            "pSprites pName"
            ". pTypes"
            ". pMoves";
        grid-template-rows: 5.6rem min-content min-content;
        grid-template-columns: 1fr 2fr;
    }
    @media ${props => props.theme.media.large} {
        padding-bottom:4.8rem;
    }
`

export const DetailPokemonSection = styled.section`
    background:${props => props.theme.colors.backgroundSecondary};
    box-shadow: ${props => props.theme.shadows.shadow4};
    border-top:.2rem ${props => props.theme.colors.border} solid;
    border-bottom:.2rem ${props => props.theme.colors.border} solid;

    height:100%;
    width:100%;

    & h1 {
        text-transform:capitalize;
        font-size:2.4rem;
    }

    @media ${props => props.theme.media.small} {
        border-radius: ${props => props.theme.radius.big};
        border:.2rem ${props => props.theme.colors.border} solid;
    }

    ${props => props.gridArea && (
        css`grid-area: ${props.gridArea};`
    )};

    ${props => props.gridArea === 'pSprites' && (
        css`
            width:100%;
            height:24rem;
            display:flex;
            justify-content:center;

            @media ${props => props.theme.media.medium} {
                height:24rem;
            }
            @media ${props => props.theme.media.large} {
                height:32rem;
            }
        `
    )};
    ${props => props.gridArea === 'pName' && (
        css`
            display:flex;
            align-items:center;
            padding:1.6rem;

            @media ${props => props.theme.media.medium} {
                padding: 0 1.6rem;
            }
        `
    )};
    ${props => props.gridArea === 'pMoves' && (
        css`
            height:fit-content;
        `
    )};
    ${props => props.gridArea === 'pTypes' && (
        css`
            height:fit-content;
        `
    )};
`

export const DetailPokemonSectionHeader = styled.div`
    font-size:1.6rem;
    border-bottom:.2rem ${props => props.theme.colors.border} solid;
    background-color:${props => props.theme.colors.backgroundTertiary};
    padding:1.6rem;
    font-weight:bold;
    border-top-left-radius:${props => props.theme.radius.big};
    border-top-right-radius:${props => props.theme.radius.big};
`

export const DetailPokemonSectionItems = styled.div`
    display:flex;
    flex-wrap:wrap;
    padding:1.6rem;
`

export const DetailPokemonSectionItem = styled.div`
    font-size:1.4rem;
    border:.2rem ${props => props.theme.colors.border} solid;
    padding:.8rem 1.6rem;
    color:${props => props.theme.colors.textSecondary};
    /* &:last-child {
        border-bottom:none;
    } */
    border-radius:999rem;
    width:fit-content;
    margin-right:.8rem;
    margin-bottom:.8rem;

    &:hover{
        border:.2rem ${props => props.theme.colors.highlightSecondary} solid;
        cursor:pointer;
    }
`

export const DetailPokemonImg = styled.div`

    position : relative;
    display:block;

    width:24rem;
    height:24rem;

    & img {
        display:block;
        width:24rem;
        height:24rem;
        object-fit:cover;
    }

    @media ${props => props.theme.media.medium} {
        width:24rem;
        height:24rem;
        & img {
            width:24rem;
            height:24rem;
        }
    }

    @media ${props => props.theme.media.large} {
        width:32rem;
        height:32rem;
        & img {
            width:32rem;
            height:32rem;
        }
    }
`
