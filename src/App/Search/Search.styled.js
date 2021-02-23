import styled from "styled-components";

export const SearchContainer = styled.div`
    margin-bottom:2.4rem;
    @media ${props => props.theme.media.small} {
        margin-bottom:3.2rem;
    }
    @media ${props => props.theme.media.large} {
        margin-bottom:4.8rem;
    }

    display:flex;
    align-items:center;
    justify-content:center;
`;

export const SearchInput = styled.input`
    padding:.8rem 1.6rem;
    background:${props => props.theme.colors.backgroundSecondary};
    box-shadow: ${props => props.theme.shadows.shadow4};
    border:.2rem ${props => props.theme.colors.border} solid;

    min-height:5.6rem;
    width:100%;


    color:${props => props.theme.colors.textPrimary};
    font-size:2rem;

    &::placeholder {
        color:${props => props.theme.colors.textSecondary};
        font-style:italic;
    }
    
    @media ${props => props.theme.media.small} {
        border-radius: ${props => props.theme.radius.big};
        max-width:48rem;
    }
`