import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const StyledAppHeader = styled.div`
    background-color: #fff;
    width: 100%;
    height: 70px;
    position: fixed;
    display: flex;
    align-items: center;
    box-shadow: -1px -1px 3px 2px #cfcfcf;
    z-index: 10;  
`
export const LinksWrapper = styled.div`
    display: flex;
    margin: 0 4em;
    @media (max-width: 500px) {
        margin: 0;
        width: 100%;
        justify-content: space-between;
     }
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
    font-weight: 700; 
    &:hover {
        color: #ae84d1;
        box-shadow: inset 0 -4px 0 #ae84d1;
    }
    &.active {
        color: #ae84d1;
        box-shadow: inset 0 -4px 0 #ae84d1;
    }   
`
export const AppHeader = () => {
    return (
        <StyledAppHeader>
            <LinksWrapper>
                <StyledNavLink to={'/'}>Home</StyledNavLink>
                <StyledNavLink to={'/tracker'}>Tracker</StyledNavLink>
                <StyledNavLink to={'/add'}>Add Application</StyledNavLink>
                <StyledNavLink to={'/archive'}>Archive</StyledNavLink>
            </LinksWrapper>
        </StyledAppHeader>
    )
}