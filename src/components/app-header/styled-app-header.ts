import { Link } from "react-router-dom"
import styled from "styled-components"

export const StyledAppHeader = styled.div`
    background-color: #fff;
    /* min-width: 150px; */
    /* width: 100vw; */
    width: 100%;
    height: 70px;
    position: fixed;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    /* padding-block-start: 30px; */
    font-family: 'league-spartan-medium';
`

export const StyledLink = styled(Link)`
box-sizing: border-box;
    color: lightgray;
    text-decoration: none;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    &:hover{
        color: #ae84d1;
        box-shadow: inset 0 -4px 0 #ae84d1;
    }
`

export const LinksWrapper = styled.div`
    display: flex;
`

export const Logo = styled.div`
    img{
        width: 70px;
    }
`