import { LinksWrapper, Logo, StyledLink, StyledNav } from "./styled-side-nav"

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