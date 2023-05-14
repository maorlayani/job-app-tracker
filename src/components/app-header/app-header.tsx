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
            <StyledNavLink to={'/edit'}>Add Application</StyledNavLink>
            <StyledNavLink to={'/activity'}>My Activity</StyledNavLink>
            <StyledNavLink to={'/reports'}>Reports</StyledNavLink>
            <StyledNavLink to={'/contact'}>Contact us</StyledNavLink>
        </LinksWrapper>
    </StyledAppHeader>
}