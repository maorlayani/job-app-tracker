import { LinksWrapper, Logo, StyledNavLink, StyledAppHeader } from "./styled-app-header"
import logoImg from '../../assets/img/logo.png'
// import Globalfonts from '../../assets/global-fonts'
export const AppHeader = () => {
    return <StyledAppHeader>
        {/* <Globalfonts /> */}
        <Logo>
            <img src={logoImg} alt="" />
        </Logo>
        <LinksWrapper>
            <StyledNavLink to={'/'}>Home</StyledNavLink>
            <StyledNavLink to={'/tracker'}>Tracker</StyledNavLink>
            <StyledNavLink to={'/add'}>Add Application</StyledNavLink>
            <StyledNavLink to={'/archive'}>Archive</StyledNavLink>
            {/* <StyledNavLink to={'/contact'}>Contact us</StyledNavLink> */}
        </LinksWrapper>
    </StyledAppHeader>
}