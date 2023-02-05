import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledNav = styled.div`
    background-color: #fff;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block-start: 30px;
    font-family: 'league-spartan-medium';
`

const StyledLink = styled(Link)`
    color: lightgray;
    text-decoration: none;
    &:hover{
        color: #ae84d1;
    }
`
const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-block-start: 5rem;
`

const Logo = styled.div`
    color:  #ae84d1;
    font-size: 1.2rem;
    font-weight: 900;
`

export const SideNav = () => {
    return <StyledNav>
        <Logo>JobAppTracker</Logo>
        <LinksWrapper>
            <StyledLink to={'/'}>Home</StyledLink>
            <StyledLink to={'/edit'}>Add Application</StyledLink>
            <StyledLink to={'/'}>My Activity</StyledLink>
            <StyledLink to={'/'}>Reports</StyledLink>
            <StyledLink to={'/'}>Contact us</StyledLink>
        </LinksWrapper>
    </StyledNav>
}