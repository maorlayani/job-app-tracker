import { Link } from "react-router-dom"
import styled from "styled-components"

export const StyledNav = styled.div`
    background-color: #fff;
    min-width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block-start: 30px;
    font-family: 'league-spartan-medium';
`

export const StyledLink = styled(Link)`
    color: lightgray;
    text-decoration: none;
    &:hover{
        color: #ae84d1;
    }
`

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-block-start: 5rem;
`

export const Logo = styled.div`
    color:  #ae84d1;
    font-size: 1.2rem;
    font-weight: 900;
`