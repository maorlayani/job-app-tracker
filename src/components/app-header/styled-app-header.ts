import { Link, NavLink } from "react-router-dom"
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
    // font-family: 'league-spartan-medium';
    box-shadow: -1px -1px 3px 2px #cfcfcf;
    z-index: 10;
    
`

export const StyledNavLink = styled(NavLink)`
    box-sizing: border-box;
    color: #cfcfcf;
    text-decoration: none;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    //  font-family: 'league-spartan-bold';
     font-weight: 700; 
    &:hover{
        color: #ae84d1;
        box-shadow: inset 0 -4px 0 #ae84d1;
    }
    &.active{
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