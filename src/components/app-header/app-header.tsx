import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { Hamburger } from "./hamburger"
import { useState } from "react"
import { DropdownMenu } from "./dropdown-menu"

export const StyledAppHeader = styled.header`
    background-color: var(--accent);
    // background-color: #fff;
    width: 100%;
    height: 70px;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: -1px -1px 3px 2px #cfcfcf;
    padding: 0 4em;
    z-index: 100;  
    @media (max-width: 500px) {
        justify-content: center;
     }
`
const StyledTitle = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: .7px;
    color: var(--secondary--button);
    display: none;
    @media (max-width: 500px) {
        display: block;
    }
`
export const LinksWrapper = styled.div`
    display: flex;
    @media (max-width: 500px) {
        display: none;
     }
`
export const StyledNavLink = styled(NavLink)`
    box-sizing: border-box;
    color: var(--secondary--button);
    text-decoration: none;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    font-weight: 700; 
    &:hover {
        color: var(--secondary-text);
        box-shadow: inset 0 -4px 0 var(--secondary-text);
    }
    &.active {
        color: var(--secondary-text);
        box-shadow: inset 0 -4px 0 var(--secondary-text);
    }   
`
export const AppHeader = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    return (
        <StyledAppHeader>
            <Hamburger isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} />
            <DropdownMenu isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} />
            <StyledTitle>Job App Tracker</StyledTitle>
            <LinksWrapper>
                <StyledNavLink to={'/'}>Home</StyledNavLink>
                <StyledNavLink to={'/tracker'}>Tracker</StyledNavLink>
                <StyledNavLink to={'/add'}>Add Application</StyledNavLink>
                <StyledNavLink to={'/archive'}>Archive</StyledNavLink>
            </LinksWrapper>
        </StyledAppHeader>
    )
}