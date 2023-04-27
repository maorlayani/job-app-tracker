import { LinksWrapper, Logo, StyledLink, StyledAppHeader } from "./styled-app-header"
import logoImg from '../../assets/img/logo.png'
import Globalfonts from '../../assets/global-fonts'
export const AppHeader = () => {
    return <StyledAppHeader>
        <Globalfonts />
        <Logo>
            <img src={logoImg} alt="" />
        </Logo>
        <LinksWrapper>
            <StyledLink to={'/'}>Home</StyledLink>
            <StyledLink to={'/edit'}>Add Application</StyledLink>
            <StyledLink to={'/'}>My Activity</StyledLink>
            <StyledLink to={'/'}>Reports</StyledLink>
            <StyledLink to={'/'}>Contact us</StyledLink>
        </LinksWrapper>
    </StyledAppHeader>
}